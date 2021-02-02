<template>
    <div>
        <el-card shadow="never">
          <!-- <ul>
            <li class="item-li" v-for="(item, index) in constantRouterMap"
              :key="index" :index="item.path" @click="onSelect(item.path)">
              <div v-if="item.meta&&item.meta.type=='user'">
                    <i :class="item.meta.icon"></i>
                    <span slot="title">{{item.meta.title}}</span>
              </div>
            </li>
          </ul> -->
            <el-menu :default-active="active" @select="onSelect" router="false">
                <el-menu-item v-for="(item, index) in constantRouterMap" 
                    :key="index" :index="item.path">
                    <div v-if="item.meta&&item.meta.type=='user'">
                        <i :class="item.meta.icon"></i>
                        <span slot="title">{{item.meta.title}}</span>
                    </div>
                </el-menu-item>
            </el-menu>
        </el-card>

        <!-- <el-card shadow="never" style="margin-top: 20px;text-align: center">
            <div v-if="!token" style="font-size: 0.9rem;line-height: 1.5;color: #606c71;">
                <el-tag type="danger" size="small">&nbsp;</el-tag>&nbsp;&nbsp; Token未绑定&nbsp;&nbsp;
                <el-button type="text" @click="openTokenDialog">绑定</el-button>
            </div>
            <div v-if="token" style="font-size: 0.9rem;line-height: 1.5;color: #303133;">
                <el-tag type="success" size="small">&nbsp;</el-tag>&nbsp;&nbsp; Token已绑定&nbsp;&nbsp;
                <el-button type="text" @click="cancellation">注销</el-button>
            </div>
            <div style="margin-top: 10px;text-align: left">
                <el-alert title="Token获取" type="info" description="在 github-> settings-> developerSettings-> personalAccessTokens 勾选gist权限,获取Token. 详情参考README.md"
                    :closable="false">
                </el-alert>
            </div>
        </el-card> -->
        <!-- <token-dialog ref="tokenDialog"></token-dialog> -->
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import { constantRouterMap } from '@/router'
    // import TokenDialog from '@/views/common/TokenDialog'
    export default {
        components: {
            // TokenDialog
        },
        data() {
            return {
              constantRouterMap,
                active: "",
                parentUrl: "",
                menuList: [],
                constantRouterMap2: []
            }
        },
        computed: {
            ...mapGetters([
                'token',
                'githubUsername',
                'mini'
            ])
        },
        mounted() {
          // console.log(constantRouterMap)
          // // this.constantRouterMap2 = constantRouterMap
          // // console.log(constantRouterMap)
          // console.log(this.$route)
          if (this.$route.path === '/') {
            this.active = '/'
          }else {
            let arr = this.$route.path.split("/")
            this.active = "/" + arr[1]
            console.log(this.active)
          }
        },
        methods: {
            onSelect(index) {
              console.log(index)
              console.log(this.$router)
            },
            openTokenDialog() {
                this.$refs.tokenDialog.open(() => {
           
                })
            },
            cancellation() {
                this.$store.dispatch("Cancellation")
            }
        }
    }
</script>
<style scoped>

/* .item-li {
  list-style: none;
  height: 56px;
  line-height: 56px;
  font-size: 14px;
} */


</style>