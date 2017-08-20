<template>
  <div class="animated">
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <div class="card">
          <div class="card-header">
            <div class="row">
                <div class="col-sm-9 col-md-9">  
                  <el-button icon="plus" @click="$router.push({ name: 'ArticleForm'})">新建文章</el-button>
                </div>
                <div class="col-sm-3 col-md-3"> 
                  <el-input
                    placeholder="请选择日期"
                    icon="search"
                    v-model="searchVal"
                    :on-icon-click="onSearchIconClick">
                  </el-input>
                </div>
            </div>
          </div>
          <div class="card-block">
            <div class="block">
              <el-button type="small">全部</el-button>
              <el-button type="small">已发表</el-button>
              <el-button type="small">草稿</el-button>

            </div>
            <el-table
              ref="multipleTable"
              :data="tableData3"
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
                label="操作"
                width="160">
                <template scope="scope">
                  <el-button
                    type="text"
                    size="small">
                    未发布
                  </el-button>

                  <el-button
                    type="text"
                    size="small">
                    修改
                  </el-button>

                  <el-button
                    type="text"
                    size="small">
                    移除
                  </el-button>
                </template>
              </el-table-column>            
              </el-table>
            <div style="margin-top: 20px">
              <el-button @click="toggleSelection(tableData3)">全部选择</el-button>
              <el-button @click="">删除</el-button>

             </div>

          </div>
        </div>
      </div><!--/.col-->
    </div>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
export default {
  name: 'articleForm',
  components: { quillEditor },
  data () {
    return {
        searchVal: '',
        tableData3: [{
          id: 1111,
          title: '上海市普区金沙江路 1518 弄',
          publicDate: '2016-05-03',
          view: 12321
        }],
        multipleSelection: [],
      dialogPhotoVisible: false,
      form: {
        title: '',
        subTitle: '',
        name: '',
        cover: '',
        desc: '',
        skinType: '',
        texiao: '',
        price: '',
        gold: '',
        update: '',
        buyAddress: '',
        leavle: '',
        status: '',
        dealine: 4,
        salesPrice: '',
        game: '',
        hero: '',
        skinFrom: ''
      },
      skinTypeArr: [],
      dealineArr: []
    }
  },
  created: function () {
    this.skinTypeArr = [{ value: '1', label: '普通' }, { value: '2', label: '史诗' }];
    this.dealineArr = [{ value: 1, label: '1天' }, { value: 2, label: '3天' }, { value: 3, label: '一周' }, { value: 4, label: '永久' }];
    this.texiaoArr =  [{ value: 0, label: '无' }, { value: 1, label: '有'}, { value: 2, label: '部分' },{ value: 3, label: '回城' }];
  },
  methods: {
    handleClose (done) {
      done()
    },
    onRadioChange (val) {
      console.log(this.form)
    },
    onEditorBlur () {

    },
    onEditorFocus () {

    },
    onEditorReady () {

    },
    onSearchIconClick(){

    },
      toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
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
