<template>
  <div class="pagelet-figure-gallery">
		<draggable class="list-group" v-model="galleryData" :options="{dragClass:'.el-icon-date'}">
		 <transition-group type="transition" :name="'flip-list'">
		  	<div class="pagelet-figure-gallery-item" v-for="(item,index) in galleryData" :key="index">
					<div class="gallery-img"><img alt="" :src="item.gallery"></div>
					<div class="gallery-txt"><textarea  :placeholder="item.textarea" maxlength="200"></textarea></div>
			  	<div class="gallery-action">
				  	<el-tooltip content="更换图片" placement="top" size="small">
						  <el-button icon="picture"></el-button>
						</el-tooltip>
						<el-tooltip content="删除图片" placement="top" size="small">
						  <el-button icon="delete" @click="removeRow(index, galleryData)"></el-button>
						</el-tooltip>
						<el-tooltip content="拖动排序" placement="top" size="small">
						  <el-button icon="date" class="item-draggable"></el-button>
						</el-tooltip>
			  	</div>
		  	</div>
  		</transition-group>
  	</draggable>
  </div>
</template>

<script>
	import draggable from 'vuedraggable'
  export default {
  	components:{
  		draggable
  	},
    data() {
      return {
      	galleryData: []
      }
    },
    props: {
    	galleryItem: {
        type: Array
    	},
    	changeGalleryItem: {
    		type: Function
    	}
    },
	  watch: {
	  	galleryData: function(val, oldVal){
	  		this.onChangeGalleryItem(val);
	  	}
	  },
    created(){
    	this.galleryData = this.galleryItem
    },
    methods: {

    	onChangeGalleryItem (data){
    		console.log(data)
    		this.$emit('changeGalleryItem', data)
    	},  
	    /**
	     * removeRow 根据index删除行
	     * @param  { Number } index 表格index值
	     * @param  { Object } rows  当前表格对象
	     * @return {[type]}       [description]
	     */
	    removeRow (index, rows){
	      rows.splice(index, 1);
	    }
    }
  }
</script>
<style lang="scss">
	.pagelet-figure-gallery {
		.pagelet-figure-gallery-item {
			box-sizing: border-box;
			line-height: 78px;
	    padding: 22px 22px 22px 50px;
	    border-bottom: 1px solid #e8e8e8;
	    background-color: #fafafa;
	    position: relative;
	    display: flex;
	    justify-content: center;
		}
		.gallery-img {
			width: 102px;
			height: 78px;
			overflow: hidden;
			position: relative;
			text-align: center;
			flex-grow: 1;
			img {
		    max-width: 100%;
		    max-height: 100%;
			}
		}
		.gallery-txt,
		.gallery-action {
			margin-left: 22px;
		}
		.gallery-txt {
			width: 100%;
			
			height: 78px;
			flex-grow: 2;
			textarea {
		    padding: 8px 10px;
		    line-height: 28px;
		    width: 100%;
		    height: 100%;
		    -webkit-box-sizing: border-box;
		    -moz-box-sizing: border-box;
		    box-sizing: border-box;
		    border: 1px solid #e8e8e8;
		    -webkit-border-radius: 4px;
		    -moz-border-radius: 4px;
		    border-radius: 4px;
		    background: #fff;
		    font-size: 14px;
		    resize: none;
		    overflow-y: auto;
			}
		}
		.gallery-action {
			display: flex;
			flex-grow: 1;
			.el-button {
				align-self: center;
				padding: 0;
				font-size: 18px;
				border: 0;
				color: #898989;
				height: 20px;
			}
			.iconfont {
				margin-right: 10px;
				cursor: pointer;
			}
		}
	}

.flip-list-move {
  transition: transform 0.2s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: .5;
  background: #C8EBFB;
}

.list-group {
  min-height: 20px;
}

.list-group-item {
  cursor: move;
}

.list-group-item i{
  cursor: pointer;
}
</style>