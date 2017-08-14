<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <div class="card">
          <div class="card-header">
          <div class="row">
            <div class="col-sm-8">     
              <el-button type="primary" icon="plus">文章</el-button>     
              <el-button type="primary" icon="plus">图集</el-button> 
              <el-button type="primary" icon="plus">视频</el-button> 
            </div>
            <div class="col-sm-4"><el-input class="float-right" placeholder="搜索文章" icon="search" v-model="keyword" :on-icon-click="searchArticle"></el-input></div>
          </div>
            
          </div>
          <div class="card-block">
            <table class="table table-bordered table-striped table-sm">
              <thead>
                <tr>
                  <th>选择</th>
                  <th>ID</th>
                  <th>所属栏目</th>
                  <th>发布时间</th>
                  <th>更新时间</th>
                  <th>标题</th>
                  <th>管理操作</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Vishnu Serghei</td>
                  <td>2012/01/01</td>
                  <td>Member</td>
                  <td>Member</td>
                  <td>Member</td>
                  <td>Member</td>
                  <td>
                    <span class="badge badge-success">Active</span>
                  </td>
                </tr>
              </tbody>
            </table>
  <div class="block float-right">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage"
      :page-size="100"
      layout="total, prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>

          </div>
        </div>
      </div><!--/.col-->
    </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {
      keyword: '',
      currentPage: 1
    }
  },
  methods: {
    searchArticle () {

    },
    handleSizeChange (size) {

    },
    handleCurrentChange (currentPage) {
      console.log(currentPage)
    }
  }
}
</script>
