<template>
  <div class="animated">
   <router-view></router-view>
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <div class="card">
          <div class="card-header">
          <el-button icon="plus" @click="$router.push({ name: 'ArticleForm'})">新建文章</el-button>
          </div>
          <div class="card-block">
            <el-table
              ref="multipleTable"
              :data="tableData3"
              border
              tooltip-effect="dark"
              style="width: 100%"
              @selection-change="handleSelectionChange">
              <el-table-column
                type="selection"
                width="55">
              </el-table-column>
              <el-table-column
                label="日期"
                width="120">
                <template scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column
                prop="name"
                label="姓名"
                width="120">
              </el-table-column>
              <el-table-column
                prop="address"
                label="地址"
                show-overflow-tooltip>
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
        tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-07',
          name: '王小虎',
          address: '上海市普区金沙江路 1518 弄'
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
