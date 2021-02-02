<template>
    <div style="min-height: 600px" v-loading="loading">
        <el-card shadow="never" style="margin-bottom: 20px">
            <el-input placeholder="请输入关键字" v-model="searchKey" clearable style="width: 300px"></el-input>
            <el-button @click="search" icon="el-icon-search" style="margin-left: 10px" circle plain></el-button>
            <el-button @click="$share()" style="margin-left: 10px" icon="el-icon-share" type="warning" plain circle></el-button>
            <el-button type="primary" icon="el-icon-edit" round plain style="float: right;" @click="goAdd">写博文</el-button>
        </el-card>

        <div v-if="blogs&&blogs.length>0">
            <el-card shadow="hover" v-for="(item,index) in blogs" :key="'p'+index" style="margin-bottom: 20px">
                <div slot="header">
                    <el-row>
                        <el-col :span="16">
                            <span>
                                <g-link style="text-decoration:none;cursor:pointer" :to="'/blog/' + item.id">
                                    <i class="el-icon-edit-outline"></i>&nbsp;&nbsp; {{item.title}}
                                </g-link>
                            </span>
                        </el-col>
                        <el-col :span="8">
                            <div style="text-align: right;">
                                <el-button @click="$share('/blog/'+item.id)" style="padding: 3px 0" type="text" icon="el-icon-share"></el-button>
                                <el-button @click="editBlog(index)" style="padding: 3px 0" type="text" icon="el-icon-edit" v-if="token"></el-button>
                                <el-button @click="deleteBlog(index)" style="padding: 3px 0" type="text" icon="el-icon-delete" v-if="token"></el-button>
                            </div>
                        </el-col>
                    </el-row>
                </div>
                <div style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                    最近更新 {{item.updated_at | timeFileter }}
                </div>
                <div style="font-size: 1.1rem;line-height: 1.5;color: #303133;padding: 10px 0px 0px 0px">
                    {{item.description}}
                </div>
            </el-card>
            <div style="text-align: center">
              <!-- <pager :info="$page.blogs.pageInfo"></pager> -->
                <el-pagination @current-change="pageClick" background layout="prev, pager, next" :current-page="$page.blogs.pageInfo.currentPage" :page-size="$page.blogs.pageInfo.perPage"
                    :total="$page.blogs.pageInfo.totalItems">
                </el-pagination>
            </div>

        </div>

        <el-card shadow="never" style="margin-bottom: 20px;padding: 20px 0px 20px 0px;text-align: center" v-if="!$page.blogs.edges||$page.blogs.edges.length==0">
            <font style="font-size: 30px;color:#dddddd ">
                <b>还没有博客 (╯°Д°)╯︵ ┻━┻</b>
            </font>
        </el-card>
    </div>
</template>
<page-query>
query ($page: Int) {
  blogs: allStrapiBlog (perPage: 4, page: $page) @paginate{
    pageInfo {
      totalPages
      totalItems
      currentPage
      perPage
    }
    edges {
      node {
        id
        title
        content
        description
        created_at
        updated_at
      }
    }
  }
}
</page-query>
<script>
    import { Pager } from 'gridsome'
    import { mapGetters } from 'vuex'
    // import GistApi from '@/api/gist'
    export default {
      metaInfo: {
        title: '博客列表'
      },
      components: {
        Pager
      },
        data() {
            return {
                loading: false,
                searchKey: "",
                blogs: [],
            }
        },
        computed: {
            ...mapGetters([
                'token',
            ]),
        },
        watch: {
          "$page.blogs.edges": {
            handler: function (val, oldVal) {
              this.blogs = this.$page.blogs.edges.map(item => item.node)
            },
            deep: true
          }

        }, 
        mounted() {
          this.list()
        },
        methods: {
            list() {
              this.blogs = this.$page.blogs.edges.map(item => item.node)
              this.loading = false
            },
            search() {
              this.blogs = this.$page.blogs.edges.filter(item =>  {
                return (item.node.title.indexOf(this.searchKey) > -1)
              }).map(item => item.node)
            },
            editBlog(index) {
                if (!this.token) {
                    this.$message({
                        message: '请绑定有效的Token',
                        type: 'warning'
                    })
                    return
                }
            },
            deleteBlog(index) {
            },
            goAdd() {
              if (!this.token) {
                  this.$message({
                      message: '请绑定有效的Token',
                      type: 'warning'
                  })
                  return
              }
              // this.$router.push('/user/blog/add')
            },
            goDetails(id) {
              this.$router.push("/blog/" + id)
            },
            pageClick (page) {
              this.$router.push(page == 1 ? '/blogs' : `/blogs/${page}`)
            }
        }
    }
</script>