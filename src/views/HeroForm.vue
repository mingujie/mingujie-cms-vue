<template>
  <div class="animated fadeIn">
    <div class="row">
      <div class="col-sm-12 col-md-12">
        <div class="card">
          <div class="card-header">
            <strong>新建英雄</strong> <small></small>
          </div>

          <div class="card-block">
            <el-form ref="form" :model="form" label-width="80px" id="form">
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">中文名称</label> 
              <div class="col-md-11">
                  <el-input placeholder="英雄的中文名称" v-model="form.title">
                  </el-input>
              </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">英文名称</label> 
              <div class="col-md-11">
                  <el-input placeholder="英雄的英文名称" v-model="form.subTitle">
                  </el-input>
              </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">拼音名称</label> 
              <div class="col-md-11">
                  <el-input placeholder="英雄的全拼名称" v-model="form.subTitle">
                  </el-input>
              </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">头像</label> 
              <div class="col-md-11">
                <el-button size="small" @click="dialogPhotoVisible = true">从图片库选择</el-button>
              </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">封面</label> 
              <div class="col-md-11">
                <el-button size="small" @click="dialogPhotoVisible = true">从图片库选择</el-button>
              </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">性别</label> 
                <div class="col-md-11">
                  <el-select v-model="form.skinType" placeholder="请选择">
                    <el-option v-if="skinTypeArr.length" v-for="item in skinTypeArr" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>             
                </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">身高</label> 
              <div class="col-md-11">
                  <el-input placeholder="英雄身高（单位为CM）" v-model="form.title">
                  </el-input>
              </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">价格</label> 
              <div class="col-md-11">
                  <el-input placeholder="点券类" v-model="form.price">
                  </el-input>
              </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">金币</label> 
              <div class="col-md-11">
                  <el-input placeholder="金币类" v-model="form.gold">
                  </el-input>
              </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">促销价格</label> 
              <div class="col-md-11">
                  <el-input placeholder="促销价格" v-model="form.salesPrice">
                  </el-input>
              </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">购买地址</label> 
              <div class="col-md-11">
                  <el-input placeholder="购买地址" v-model="form.buyAddress">
                  </el-input>
              </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">上架日期</label> 
                <div class="col-md-11">
                  <el-date-picker
                    v-model="form.update"
                    type="date"
                    placeholder="选择日期">
                  </el-date-picker>
                </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">期限</label> 
                <div class="col-md-11">
                  <el-select v-model="form.dealine" placeholder="请选择">
                    <el-option v-if="dealineArr.length" v-for="item in dealineArr" :key="item.value" :label="item.label" :value="item.value">
                    </el-option>
                  </el-select>             
                </div>
            </div>
            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">摘要</label> 
              <div class="col-md-11">
                <label for="prependedInput" class="form-control-label">英雄介绍</label>
                <el-input type="textarea" :rows="4" v-model="form.desc"></el-input>
              </div>
            </div>

            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label">游戏职业</label> 
              <div class="col-md-11">
              <span class="demonstration">为英雄选择对应的游戏和职业</span>
              <div class="block">
              <el-cascader
                placeholder="试试搜索：指南"
                :options="form.heroes"
                filterable
              ></el-cascader>
              </div>
              </div>
            </div>

            <div class="form-group row">
              <label for="text-input" class="col-md-1 form-control-label"></label> 
              <div class="col-md-11">
                <el-button type="primary">保存</el-button>
                <el-button >取消</el-button>
              </div>
            </div>
            </el-form>
          </div>
        </div>
      </div><!--/.col-->
    </div>
    <el-dialog
      title="选择图片"
      :visible.sync="dialogPhotoVisible"
      size="small"
      :before-close="handleClose" class="dialogPhoto">
        <div class="card">
          <div class="card-header"> 
           <el-button type="success" size="small">本地上传</el-button>    
          </div>
          <div class="card-block">
            <div class="row">
              <div class="col-md-3">
1
              </div>
                            <div class="col-md-3">
2
              </div>

              <div class="col-md-3">
3
              </div>
              <div class="col-md-3">
4
              </div>

            </div>
          </div>
      </div>
       <span slot="footer" class="dialog-footer">

        <el-button @click="dialogPhotoVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogPhotoVisible = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { quillEditor } from 'vue-quill-editor'
export default {
  name: 'articleForm',
  components: { quillEditor },
  data () {
    return {
      dialogPhotoVisible: false,
      form: {
        heroes:[{
          value: 'zhinan',
          label: '指南',
          children: [{
            value: 'shejiyuanze',
            label: '设计原则'        
            }]
        }],
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
