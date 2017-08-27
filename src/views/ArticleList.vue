<template>
  <div class="animated">
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <div class="card">
          <div class="card-header">
            <div class="row">
                <div class="col-sm-9 col-md-9">  
                  <el-button icon="plus" @click="$router.push({ name: viewConfig.createContentRouteName})">{{viewConfig.createContentBtnText}}</el-button>
                </div>
                <div class="col-sm-3 col-md-3"> 
                  <el-input
                    placeholder="按标题搜索"
                    icon="search"
                    v-model="searchVal"
                    :on-icon-click="onSearchIconClick">
                  </el-input>
                </div>
            </div>
          </div>
          <div class="card-block">
            <div class="block">
              <el-button type="small" @click="selectAllHandle">全部</el-button>
              <el-button type="small" @click="selectPublicHandle">已发表</el-button>
              <el-button type="small" @click="selectDraftHandle">草稿</el-button>
            </div>
            <el-table
              ref="multipleTable"
              :data="articleData"
              border
              tooltip-effect="dark"
              style="width: 100%;margin-top:20px;"
              @selection-change="handleSelectionChange">
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
                label="ID"
                width="80"
                prop="id">
              </el-table-column>
              <el-table-column
                prop="title"
                label="标题">
              </el-table-column>
              <el-table-column
                label="发布时间" width="140">
                <template scope="scope">{{ scope.row.publicDate }}<i class="el-icon-time el-icon--right"></i></template>
              </el-table-column>
              <el-table-column
                prop="view"
                label="阅读量" width="80">
              </el-table-column>
              <el-table-column
                prop="status"
                label="状态" width="80">
              </el-table-column>
              <el-table-column
                label="操作"
                width="160">
                <template scope="scope">
                  <el-button
                    type="text"
                    size="small" @click="modifyArticle">
                    修改
                  </el-button>
                  <el-button
                    type="text"
                    size="small" @click="removeRow(scope.$index, articleData)">
                    移除
                  </el-button>
                </template>
              </el-table-column>            
              </el-table>
            <div class="block" style="margin-top: 20px">
              <el-button @click="toggleSelection(articleData)" type="small">全部选择</el-button>
              <el-button @click="removeClickHandle(multipleSelection)" type="small">删除</el-button>
                <el-pagination v-if="pagination.total" class="float-right"
    layout="prev, pager, next"
    @current-change="paginationChage"
    :total="pagination.total"
    :current-page="pagination.page"
    :page-size="pagination.size">
  </el-pagination>
             </div>
          </div>
        </div>
      </div><!--/.col-->
    </div>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
import { getViewConfig } from '../util'
export default {
  name: 'articleList',
  components: { quillEditor },
  data () {
    return {
      viewConfig: {
        pageTitle: '文章列表',
        createContentBtnText: '创建文章',
        routerName: 'article',
        interfaceName: ''
      },
      searchVal: '',
      articleData: [],
      multipleSelection: [],
      dialogPhotoVisible: false,
      skinTypeArr: [],
      dealineArr: [],
      pagination: {
        total: 0,
        page: 1,
        size: 10
      }
    }
  },
  created: function () {
    let $route = this.$route
    this.initViewConfig($route)

    this.getArticleData();
    this.pagination.total = this.articleData.length;
  },
  watch:{
    $route (){
      let $route = this.$route

      this.initViewConfig($route)
    }
  },
  methods: {
    /**
     * initViewConfig 根据路由名称初始化视图配置
     * @param  { Object } $route 路由对象
     * @return {[type]}        [description]
     */
    initViewConfig ($route){
      let routeName = $route.name
      if(routeName){
         this.viewConfig = getViewConfig(routeName);
      }
    },
    /**
     * [selectAllHandle description]
     * @return {[type]} [description]
     */
    selectAllHandle (){
      console.log('全部')
    },
    selectPublicHandle (){
      console.log('已发表')
    },
    selectDraftHandle (){
console.log('草稿')
    },
    /**
     * [emoveClickHandle 底部删除按钮点击事件
     * @param  { Array } rows 选择选项的数组
     * @return {[type]}      [description]
     */
    removeClickHandle (rows){
      let self = this;
      if(rows.length){         
          self.removeRowsCofirm( function(){

            rows.forEach(row => {
              self.removeArticleRows(row)
            });
          })   
      }
    },
    /**
     * getArticleRowIndex 返回row对象在数据里的Index
     * @param  { Object } row 所选择对象
     * @return { Number }     所选对象在数据里的index值
     */
    removeArticleRows (row){
      this.articleData.forEach((data,index) => {
        if(data.id === row.id) {
          console.log(index, this.articleData)
          this.articleData.splice(index,  1);
        }
      });
    },
    /**
     * modifyArticle 根据文章ID编辑文章
     * @param  { String } aid 文章ID
     * @return {[type]}     [description]
     */
    modifyArticle (aid){
      this.$router.push({ name: 'modifyArticle', params: { aid: 123 }})
    },
    /**
     * removeRow 根据index删除行
     * @param  { Number } index 表格index值
     * @param  { Object } rows  当前表格对象
     * @return {[type]}       [description]
     */
    removeRow (index, rows){
      this.removeRowsCofirm( function(){
        rows.splice(index, 1);
      })
    },
    /**
     * removeRowsCofirm 删除提示
     * @param  {Function} callback 回调函数
     * @return {[type]}            [description]
     */
    removeRowsCofirm (callback){
      this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        callback()
        this.$message({
          type: 'success',
          message: '删除成功!'
        });
      }).catch(() => {
        // this.$message({
        //   type: 'info',
        //   message: '已取消删除'
        // });          
      });
    },
    /**
     * onSearchIconClick 搜索按钮
     * @return {[type]} [description]
     */
    onSearchIconClick(){
      console.log(this.searchVal)
    },
    getArticleData (){
      this.articleData =  [{
          id: 1111,
          title: '上海市普区金沙江路 1518 弄',
          publicDate: '2016-05-03',
          view: 12321,
          status: '草稿'
        },{
          id: 1222,
          title: '上海市普区金沙江路 1518 弄',
          publicDate: '2016-05-03',
          view: 12321,
          status: '已发表'
        },{
          id: 1222,
          title: '上海市普区金沙江路 1518 弄',
          publicDate: '2016-05-03',
          view: 12321,
          status: '已发表'
        },{
          id: 1222,
          title: '上海市普区金沙江路 1518 弄',
          publicDate: '2016-05-03',
          view: 12321,
          status: '已发表'
        },{
          id: 1222,
          title: '上海市普区金沙江路 1518 弄',
          publicDate: '2016-05-03',
          view: 12321,
          status: '已发表'
        },{
          id: 1222,
          title: '上海市普区金沙江路 1518 弄',
          publicDate: '2016-05-03',
          view: 12321,
          status: '已发表'
        },{
          id: 1222,
          title: '上海市普区金沙江路 1518 弄',
          publicDate: '2016-05-03',
          view: 12321,
          status: '已发表'
        },{
          id: 1222,
          title: '上海市普区金沙江路 1518 弄',
          publicDate: '2016-05-03',
          view: 12321,
          status: '已发表'
        },{
          id: 1222,
          title: '上海市普区金沙江路 1518 弄',
          publicDate: '2016-05-03',
          view: 12321,
          status: '已发表'
        },{
          id: 1222,
          title: '上海市普区金沙江路 1518 弄',
          publicDate: '2016-05-03',
          view: 12321,
          status: '已发表'
        },{
          id: 1222,
          title: '上海市普区金沙江路 1518 弄',
          publicDate: '2016-05-03',
          view: 12321,
          status: '已发表'
        },{
          id: 1222,
          title: '上海市普区金沙江路 1518 弄',
          publicDate: '2016-05-03',
          view: 12321,
          status: '已发表'
        },{
          id: 1222,
          title: '上海市普区金沙江路 1518 弄',
          publicDate: '2016-05-03',
          view: 12321,
          status: '已发表'
        },{
          id: 1222,
          title: '上海市普区金沙江路 1518 弄',
          publicDate: '2016-05-03',
          view: 12321,
          status: '已发表'
        },{
          id: 1222,
          title: '上海市普区金沙江路 1518 弄',
          publicDate: '2016-05-03',
          view: 12321,
          status: '已发表'
        },{
          id: 1222,
          title: '上海市普区金沙江路 1518 弄',
          publicDate: '2016-05-03',
          view: 12321,
          status: '已发表'
        },{
          id: 1222,
          title: '上海市普区金沙江路 1518 弄',
          publicDate: '2016-05-03',
          view: 12321,
          status: '已发表'
        },{
          id: 1222,
          title: '上海市普区金沙江路 1518 弄',
          publicDate: '2016-05-03',
          view: 12321,
          status: '已发表'
        },{
          id: 1222,
          title: '上海市普区金沙江路 1518 弄',
          publicDate: '2016-05-03',
          view: 12321,
          status: '已发表'
        },{
          id: 1222,
          title: '上海市普区金沙江路 1518 弄',
          publicDate: '2016-05-03',
          view: 12321,
          status: '已发表'
        },{
          id: 1222,
          title: '上海市普区金沙江路 1518 弄',
          publicDate: '2016-05-03',
          view: 12321,
          status: '已发表'
        },{
          id: 1222,
          title: '上海市普区金沙江路 1518 弄',
          publicDate: '2016-05-03',
          view: 12321,
          status: '已发表'
        }]
    },
    /**
     * toggleSelection 表格选项选择逻辑
     * @param  { Array } rows 文章数据
     * @return {[type]}      [description]
     */
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    /**
     * handleSelectionChange 选项被选择时触发
     * @param  { Array } val  被选择中行所对应的数据
     * @return {[type]}     [description]
     */
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    paginationChage (currentPage){
      console.log(currentPage)
    }

  }
}
</script>
<style>
  .dialogPhoto .el-dialog {
    width : 845px !important;
  }
.ql-container.ql-snow {
  height: 360px !important;
}
</style>
