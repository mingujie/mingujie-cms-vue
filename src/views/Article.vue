<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <div class="card">
          <div class="card-header">
            <button type="button" class="btn btn-primary"><i class="fa fa-star"></i>&nbsp; 添加内容</button>
            <el-input
  placeholder="请选择日期"
  icon="search"
  v-model="keyword"
  :on-icon-click="searchArticle">
</el-input>
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
            <nav>
              <ul class="pagination">
                <li class="page-item"><a class="page-link" href="#">Prev</a></li>
                <li class="page-item active">
                  <a class="page-link" href="#">1</a>
                </li>
                <li class="page-item"><a class="page-link" href="#">2</a></li>
                <li class="page-item"><a class="page-link" href="#">3</a></li>
                <li class="page-item"><a class="page-link" href="#">4</a></li>
                <li class="page-item"><a class="page-link" href="#">Next</a></li>
              </ul>
            </nav>

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
      keyword: ''
    }
  },
  methods: {
    searchArticle () {

    }
  }
}
</script>
