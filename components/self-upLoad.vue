<template>
	<view class="self_upload">
		<text class="self_input_label" v-if="label">{{label}}</text>
		<view class="self_upload_box" @click="uploadHanlde">
			<image class="self_upload_box_ig" src="/static/pic.png"></image>
			<text>+ 添加</text>
		</view>
		<view class="self_upload_img" v-for="(item, index) in lists" :key="index">
			<text>{{item.tempFiles[0].name}}</text>
			<view class="self_upload_img_box">
				<text class="self_upload_see" @click="seeHandle(item)">预览</text>
				<view class="self_upload_img_box" @click="deleteHandle(item)">
					<icon type="clear" size="14"/>
				</view>
			</view>
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
		.self_upload_img {
			padding: 10rpx 20rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 22rpx;
			background-color: #f7f7f7;
			margin-bottom: 10rpx;
			border-radius: 10rpx;
			color: #333;
			.self_upload_img_box {
				display: flex;
				justify-content: center;
				align-items: center;
				.self_upload_see {
					margin-right: 20rpx;
				}
			}
		}
	}
</style>
