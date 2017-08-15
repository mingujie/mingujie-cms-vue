<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <div class="card">
<div class="card-header"><strong>Company</strong> <small>Form</small></div>
          <div class="card-block">
          <el-form ref="form" :model="form" label-width="80px" id="form">
          <div class="form-group row">
            <label for="text-input" class="col-md-1 form-control-label">标题</label> 
            <div class="col-md-11">
                <el-input placeholder="标题最多不超过60个字符" v-model="input4">
                  <template slot="append"><span>0</span>/60</template>
                </el-input>
            </div>
          </div>
            
              
            </el-form>
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
      currentPage: 1,
      form: {
        name: ''
      }
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
