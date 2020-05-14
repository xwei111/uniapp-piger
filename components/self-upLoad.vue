<template>
	<view class="self_upload">
		<text class="self_input_label" v-if="label">{{label}}</text>
		<view class="self_upload_Box_ig">
			<view class="self_upload_Box" v-for="(item, index) in lists" :key="index">
				<view @click="seeHandle(item)" class="self_upload_img_box">
					<image class="self_upload_img" :src="item.tempFilePaths[0]" ></image>
				</view>
				<view class="self_upload_delete" @click="deleteHandle(item)">
					<icon type="clear" size="14"/>
				</view>
			</view>
		</view>
		<view class="self_upload_box" @click="uploadHanlde">
			<image class="self_upload_box_ig" src="/static/pic.png"></image>
			<text>+ 添加</text>
		</view>
		
	</view>
</template>

<script>
	export default {
		props: {
			label: {
				type: String,
				default: ""
			}
		},
		data() {
			return {
				lists: []
			}
		},
		methods: {
			uploadHanlde() {
				let that = this
				uni.chooseImage({
					success: function(res) {
						that.lists.push(res)
						that.$emit('changeHandle', that.lists)
					},
					fail: function(error) {
						uni.showToast({
							title: error.errMsg ? error.errMsg : '上传失败',
							icon: 'none'
						});
					}
				})
			},
			seeHandle(item) {
				uni.previewImage({
					urls: item.tempFilePaths
				});
			},
			deleteHandle(item) {
				const index = this.lists.findIndex(e=> e.tempFilePaths[0] === item.tempFilePaths[0])
				this.lists.splice(index, 1);
				this.$emit('changeHandle', this.lists)
			}
		}
	}
</script>

<style lang="scss" scoped>
	.self_upload {
		display: flex;
		flex-direction: column;

		.self_input_label {
			display: block;
			height: 48rpx;
			font-size: 32rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: rgba(0, 0, 0, 0.7);
			line-height: 48rpx;
			margin: 24rpx 0;
			padding-left: 20rpx;
		}

		.self_upload_box {
			width: 182rpx;
			height: 182rpx;
			background: rgba(243, 243, 243, 1);
			border-radius: 10rpx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;
			font-size: 28rpx;
			font-family: PingFangSC-Regular, PingFang SC;
			font-weight: 400;
			color: rgba(51, 51, 51, 1);

			.self_upload_box_ig {
				width: 57rpx;
				height: 49rpx;
				margin-bottom: 25rpx;
			}
			margin-bottom: 20rpx;
		}
		.self_upload_Box_ig {
			overflow: hidden;
			.self_upload_Box {
				float: left;
				width: 100rpx;
				height: 100rpx;
				background: #f7f7f7;
				padding: 20rpx;
				border-radius: 20rpx;
				margin: 20rpx;
				position: relative;
				.self_upload_img_box {
					width: 100%;
					height: 100%;
					.self_upload_img {
						width: 100%;
						height: 100%;
					}
				}
				.self_upload_delete {
					position: absolute;
					top: -15rpx;
					right: -10rpx;
				}
			}
		}
		
	}
</style>
