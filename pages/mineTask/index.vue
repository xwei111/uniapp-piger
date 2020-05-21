<template>
	<!-- 我的任务 -->
	<view class="main_box">
		<view class="main_box_content">
			<view class="default_bg"></view>
			<view class="main_content">
				<self-tabs :list="tags" :active="active" @selectHandle="selectHandle" style="width: 100%;"></self-tabs>
				<self-search v-if="list&&list.length" @searchHandle="searchHandle"></self-search>
			</view>
		</view>
		<scroll-view class="scroll_task" scroll-y="true" :scroll-top="scrollTop" @scroll="scroll" :style="{height:scrollviewHigh +'px'}">
			<view class="task_content" v-if="list&&list.length">
				<self-task-mine 
					v-for="(item, index) in list" 
					:key="index" 
					:dataSource="item"
					@backHandle="backHandle"
					@detailHandle="detailHandle"
					@completeHandle="completeHandle"
				>
				</self-task-mine>
			</view>
			<self-empty v-if="!list.length"></self-empty>
		</scroll-view>
		<selfTaskColor></selfTaskColor>
	</view>
</template>

<script>
	import selfTabs from '@/components/self-tabs.vue';
	import selfSearch from '@/components/self-search.vue';
	import selfTaskMine from '@/components/taskmodel/self-task-mine.vue';
	import selfEmpty from '@/components/self-empty.vue';
	
	export default {
		data() {
			return {
				tags: [
					{ id: 1, title: '待办任务', num: 1 },
					{ id: 2, title: '我发起的', num: 20 },
					{ id: 3, title: '已办任务' },
					{ id: 4, title: '已取消' }
				],
				active: 1,
				list: [
					// 人员流程
					{title: '人员流程', people: '憨憨', pros: '隔离点-消毒', kind: 'region', key: 'peopleDisinfect'},
					{title: '人员流程', people: '憨憨', pros: '隔离点-采样', kind: 'region', key: 'peopleSample'},
					{title: '人员流程', people: '憨憨', pros: '隔离点-采样结果', kind: 'region', key: 'peopleSampleResult'},
					{title: '人员流程', people: '憨憨', pros: '入场申请审核', kind: 'region', key: 'admissionAudit'},
					{title: '人员流程', people: '憨憨', pros: '访客邀请确认', kind: 'region', key: 'guestInviate'},
					{title: '人员流程', people: '憨憨', pros: '采样确认', kind: 'region', key: 'sampleSure'},
					{title: '人员流程', people: '憨憨', pros: '洗澡确认', kind: 'region', key: 'washSure'},
					{title: '人员流程', people: '憨憨', pros: '进入隔离点', kind: 'region', key: 'inDisinfect'},
					{title: '人员流程', people: '憨憨', pros: '隔离点-人员采样结果', kind: 'region', key: 'disPeopkeSample'},
					{title: '人员流程', people: '憨憨', pros: '重新采样确认', kind: 'region', key: 'newSample'},
					{title: '人员流程', people: '憨憨', pros: '重新采样确认录入', kind: 'region', key: 'newSampleWrite'},
					{title: '人员流程', people: '憨憨', pros: '中转车-周次消毒采样', kind: 'region', key: 'weakDisinSample'},
					{title: '人员流程', people: '憨憨', pros: '中转车-周次采样结果', kind: 'region', key: 'weakSampleResult'},
					{title: '人员流程', people: '憨憨', pros: '中转车-进入隔离点', kind: 'region', key: 'inQuarantine'},
					{title: '人员流程', people: '憨憨', pros: '中转车-使用前消毒', kind: 'region', key: 'beforeDisinfect'},
					{title: '人员流程', people: '憨憨', pros: '中转车-人员中转', kind: 'region', key: 'peopleTrans'},
					{title: '人员流程', people: '憨憨', pros: '中转车-靠厂车辆检查消毒表', kind: 'region', key: 'carCheck'},
					{title: '人员流程', people: '憨憨', pros: '人员入场登记', kind: 'region', key: 'peopleRecord'},
					{title: '人员流程', people: '憨憨', pros: '人员橙黄绿进出登记', kind: 'region', key: 'peopleColorRecord'},
					{title: '人员流程', people: '憨憨', pros: '离场审批', kind: 'region', key: 'leaveApproval'},
					{title: '人员流程', people: '憨憨', pros: '离开场区记录', kind: 'region', key: 'leaveRecord'},
					
					// 车辆消洗流程
					{title: '车辆消洗流程', people: '憨憨', pros: '车辆一洗操作记录', kind: 'car', key: 'carWashRecordOne'},
					{title: '车辆消洗流程', people: '憨憨', pros: '车辆一洗检查记录', kind: 'car', key: 'carWashCheckOne'},
					{title: '车辆消洗流程', people: '憨憨', pros: '车辆二洗操作记录', kind: 'car', key: 'carWashRecordTwo'},
					{title: '车辆消洗流程', people: '憨憨', pros: '车辆二洗检查记录', kind: 'car', key: 'carWashCheckTwo'},
					{title: '车辆消洗流程', people: '憨憨', pros: '车辆二洗采样表', kind: 'car', key: 'carWashTwoSample'},
					{title: '车辆消洗流程', people: '憨憨', pros: '车辆二洗采样结果', kind: 'car', key: 'carWashTwoResult'},
					{title: '车辆消洗流程', people: '憨憨', pros: '车辆三洗', kind: 'car', key: 'carWashThree'},
					
					// 中转物资流程
					{title: '中转物资流程', people: '憨憨', pros: '中转占-消毒', kind: 'material', key: 'transferDisinfect'},
					{title: '中转物资流程', people: '憨憨', pros: '中转占-采样结果', kind: 'material', key: 'transferSample'},
					{title: '中转物资流程', people: '憨憨', pros: '中转占-物资采样记录', kind: 'material', key: 'materialRecord'},
					{title: '中转物资流程', people: '憨憨', pros: '中转占-物资登记单', kind: 'material', key: 'materialRegister'},
					{title: '中转物资流程', people: '憨憨', pros: '中转占-物资采样结果', kind: 'material', key: 'materialResult'},
					{title: '中转物资流程', people: '憨憨', pros: '中转占-物资转移待转区', kind: 'material', key: 'materialTran'},
					{title: '中转物资流程', people: '憨憨', pros: '中转占-使用前消毒', kind: 'material', key: 'materialDisinfect'},
					{title: '中转物资流程', people: '憨憨', pros: '中转占-转运登记', kind: 'material', key: 'tranRegister'},
					{title: '中转物资流程', people: '憨憨', pros: '中转占-靠场消毒', kind: 'material', key: 'sitDIsinfect'},
					{title: '中转物资流程', people: '憨憨', pros: '物资-到场登记', kind: 'material', key: 'localRegister'},
					{title: '中转物资流程', people: '憨憨', pros: '2-物资入库登记', kind: 'material', key: 'wareRegister'},
					{title: '中转物资流程', people: '憨憨', pros: '物资-内部中转车消毒', kind: 'material', key: 'tranCarDisinfect'},
					{title: '中转物资流程', people: '憨憨', pros: '物资-场内转运登记', kind: 'material', key: 'transRegister'},
					{title: '中转物资流程', people: '憨憨', pros: '1类物资-入库登记', kind: 'material', key: 'firstmaterRegister'},
					
					// 饲料车任务
					{title: '饲料车任务', people: '憨憨', pros: '饲料场采样视频上传', kind: 'feed', key: 'feedUploadVideo'},
					{title: '饲料车任务', people: '憨憨', pros: '饲料车2洗表', kind: 'feed', key: 'feedCarWashTwoTable'},
					{title: '饲料车任务', people: '憨憨', pros: '饲料车2洗检查', kind: 'feed', key: 'feedCarWashTwoCheck'},
					{title: '饲料车任务', people: '憨憨', pros: '饲料车-靠场消洗', kind: 'feed', key: 'feedSitWash'},
					{title: '饲料车任务', people: '憨憨', pros: '饲料车-周次消毒', kind: 'feed', key: 'feedWeakDis'},
					{title: '饲料车任务', people: '憨憨', pros: '饲料车-周次采样', kind: 'feed', key: 'feedWeakSample'},
					{title: '饲料车任务', people: '憨憨', pros: '饲料车-周次采样结果', kind: 'feed', key: 'feedWeakResult'},
					{title: '饲料车任务', people: '憨憨', pros: '饲料车-打料前图片上传', kind: 'feed', key: 'beforePunchingUp'},
					{title: '饲料车任务', people: '憨憨', pros: '饲料车-打料前管理确认', kind: 'feed', key: 'beforePunchingSure'},
					{title: '饲料车任务', people: '憨憨', pros: '饲料车-打料后图片上传', kind: 'feed', key: 'afterPunchingUp'},
					{title: '饲料车任务', people: '憨憨', pros: '饲料车-打料后采样记录', kind: 'feed', key: 'afterPunchingRecord'},
					{title: '饲料车任务', people: '憨憨', pros: '饲料车-打料后采样结果', kind: 'feed', key: 'afterPunchingResult'},
					
					// 引种猪任务
					{title: '引种猪任务', people: '憨憨', pros: '人员隔离点采样', kind: 'piger', key: 'disPeopleSample'},
					{title: '引种猪任务', people: '憨憨', pros: '隔离点采样结果录入', kind: 'piger', key: 'disResultRegis'},
					{title: '引种猪任务', people: '憨憨', pros: '车辆采样表', kind: 'piger', key: 'carSample'},
					{title: '引种猪任务', people: '憨憨', pros: '车辆采样结果', kind: 'piger', key: 'carSampleResult'},
					{title: '引种猪任务', people: '憨憨', pros: '进猪台洗消采样确认(卸猪前)', kind: 'piger', key: 'inPigerWashSample'},
					{title: '引种猪任务', people: '憨憨', pros: '进猪台采样结果记录', kind: 'piger', key: 'inPigerSampleRecord'},
					{title: '引种猪任务', people: '憨憨', pros: '种源地靠场消洗记录和采样确认', kind: 'piger', key: 'washAndSampleSure'},
					{title: '引种猪任务', people: '憨憨', pros: '种源地靠场采样结果录入', kind: 'piger', key: 'sampleResultRecord'},
					{title: '引种猪任务', people: '憨憨', pros: '种源地装箱', kind: 'piger', key: 'packing'},
					{title: '引种猪任务', people: '憨憨', pros: '引种猪任务返场快检', kind: 'piger', key: 'backCheck'},
					{title: '引种猪任务', people: '憨憨', pros: '引种猪任务返场快检结果', kind: 'piger', key: 'backCheckResult'},
					{title: '引种猪任务', people: '憨憨', pros: '进猪台洗消采样确认(卸猪后)', kind: 'piger', key: 'afterInPigerWash'},
					{title: '引种猪任务', people: '憨憨', pros: '进猪台采样结果记录(卸猪后)', kind: 'piger', key: 'afterSampleRecord'},
					// 断奶猪任务
					{title: '断奶猪任务', people: '憨憨', pros: '人员隔离点采样', kind: 'piger', key: 'weanDisPeopleSample'},
					{title: '断奶猪任务', people: '憨憨', pros: '隔离点采样结果录入', kind: 'piger', key: 'weanDisSampleRegister'},
					{title: '断奶猪任务', people: '憨憨', pros: '车辆采样表', kind: 'piger', key: 'weaCarSample'},
					{title: '断奶猪任务', people: '憨憨', pros: '车辆采样结果', kind: 'piger', key: 'weaCarSampleResult'},
					{title: '断奶猪任务', people: '憨憨', pros: '出口猪消毒记录(出猪前)', kind: 'piger', key: 'weaoutDisRecord'},
					{title: '断奶猪任务', people: '憨憨', pros: '种培场靠场消洗记录和采样确认', kind: 'piger', key: 'weaWashAndSampleSure'},
					{title: '断奶猪任务', people: '憨憨', pros: '种培场靠场采样结果录入', kind: 'piger', key: 'weaSampleResultRecord'},
					{title: '断奶猪任务', people: '憨憨', pros: '断奶猪进猪口洗消采样确认(进猪前)', kind: 'piger', key: 'weaInPigerWashSample'},
					{title: '断奶猪任务', people: '憨憨', pros: '断奶猪进猪口采样结果记录(进猪前)', kind: 'piger', key: 'weaInPigerSampleRecord'},
					{title: '断奶猪任务', people: '憨憨', pros: '断奶场靠场消洗记录和采样确认', kind: 'piger', key: 'weaMilkWashAndSampleSure'},
					{title: '断奶猪任务', people: '憨憨', pros: '车辆采样结果-育肥场', kind: 'piger', key: 'weaCarFatten'},
					{title: '断奶猪任务', people: '憨憨', pros: '断奶猪任务-转猪道采样', kind: 'piger', key: 'weaTranCarSample'},
					{title: '断奶猪任务', people: '憨憨', pros: '断奶猪任务-转猪道采样结果录入', kind: 'piger', key: 'weaTranCarResult'},
					{title: '断奶猪任务', people: '憨憨', pros: '断奶猪任务-转猪道消毒记录', kind: 'piger', key: 'weaTranCarDisRecord'},
					// 商品淘汰猪任务
					{title: '商品淘汰猪任务', people: '憨憨', pros: '车辆一洗消做记录', kind: 'piger', key: 'shopCarWashRecordOne'},
					{title: '商品淘汰猪任务', people: '憨憨', pros: '车辆二洗操作记录', kind: 'piger', key: 'shopCarWashRecordTwo'},
					{title: '商品淘汰猪任务', people: '憨憨', pros: '车辆二洗采样表', kind: 'piger', key: 'shopCarWashTwoSample'},
					{title: '商品淘汰猪任务', people: '憨憨', pros: '车辆二洗采样结果', kind: 'piger', key: 'shopCarWashTwoResult'},
					{title: '商品淘汰猪任务', people: '憨憨', pros: '商品淘汰猪任务-出猪台消洗', kind: 'piger', key: 'shopPigerWash'},
					// 粪肥任务
					{title: '粪肥任务', people: '憨憨', pros: '车辆一洗消做记录', kind: 'fertilizer', key: 'fertilizerCarWash'},
					{title: '粪肥任务', people: '憨憨', pros: '粪肥车靠场消洗', kind: 'fertilizer', key: 'fertilizerSitCarWash'},
					{title: '粪肥任务', people: '憨憨', pros: '场外粪肥中转车粪肥信息登记表', kind: 'fertilizer', key: 'fertilizerOutRegister'},
					// 猪场边界任务
					{title: '猪场边界任务', people: '憨憨', pros: '日常消毒事件登记', kind: 'piger', key: 'pigerBoundaryDis'},
					{title: '猪场边界任务', people: '憨憨', pros: '日常巡场情况登记', kind: 'piger', key: 'pigerBoundaryPatrol'},
					// 食材转运流程
					{title: '食材转运流程', people: '憨憨', pros: '食材中转-食材登记单', kind: 'food', key: 'foodRecord'},
					{title: '食材转运流程', people: '憨憨', pros: '食材中转-采样', kind: 'food', key: 'foodSample'},
					{title: '食材转运流程', people: '憨憨', pros: '食材中转-采样结果', kind: 'food', key: 'foodSampleResult'},
					{title: '食材转运流程', people: '憨憨', pros: '食材转运登记', kind: 'food', key: 'foodTransRegister'},
					{title: '食材转运流程', people: '憨憨', pros: '食材中转-靠场消毒', kind: 'food', key: 'foodSitDIsinfect'},
					{title: '食材转运流程', people: '憨憨', pros: '入场物资间食材再次消毒', kind: 'food', key: 'foodDisAgain'},
					// 非中转物资流程
					{title: '非中转物资流程', people: '憨憨', pros: '物资厂采样及结果确认', kind: 'material', key: 'noMerSampleSure'},
					{title: '非中转物资流程', people: '憨憨', pros: '物资厂采样视频', kind: 'material', key: 'noMerSampleVideo'},
					{title: '非中转物资流程', people: '憨憨', pros: '车辆二洗操作记录', kind: 'material', key: 'noMerCarWashRecordTwo'},
					{title: '非中转物资流程', people: '憨憨', pros: '车辆二洗采样表', kind: 'material', key: 'noMerCarWashTwoSample'},
					{title: '非中转物资流程', people: '憨憨', pros: '车辆二洗采样结果', kind: 'material', key: 'noMerCarWashTwoResult'},
					{title: '非中转物资流程', people: '憨憨', pros: '物资厂装货记录', kind: 'material', key: 'noMerRegister'},
					{title: '非中转物资流程', people: '憨憨', pros: '车辆靠场洗消', kind: 'material', key: 'noMerSitWash'},
					{title: '非中转物资流程', people: '憨憨', pros: '铲车采样', kind: 'material', key: 'noMerchanCarSample'},
					{title: '非中转物资流程', people: '憨憨', pros: '铲车采样结果输入', kind: 'material', key: 'noMerchanCarSampleResult'},
					{title: '非中转物资流程', people: '憨憨', pros: '铲车消毒记录', kind: 'material', key: 'noMerchanCarDisRecord'},
					{title: '非中转物资流程', people: '憨憨', pros: '物资登记单', kind: 'material', key: 'noMerRegisterRecord'},
					{title: '非中转物资流程', people: '憨憨', pros: '2-物资入库登记', kind: 'material', key: 'noMerInRecord'},
					{title: '非中转物资流程', people: '憨憨', pros: '内部中转车消毒', kind: 'material', key: 'noMerTranDIs'},
					{title: '非中转物资流程', people: '憨憨', pros: '物资-场内转运登记', kind: 'material', key: 'noMertranRegister'},
					{title: '非中转物资流程', people: '憨憨', pros: '1类物资-入库登记', kind: 'material', key: 'noMerFirstRegister'},
				],
				scrollTop: 0,
				old: {
					scrollTop: 0
				},
				scrollviewHigh: 0,
				taskUrl: {
					// 人员流程
					peopleDisinfect: '/pages/allTask/people/disinfect',
					peopleSample: '/pages/allTask/people/sample',
					peopleSampleResult: '/pages/allTask/people/sampleResult',
					admissionAudit: '/pages/allTask/people/admissionAudit',
					guestInviate: '/pages/allTask/people/guestInviate',
					sampleSure: '/pages/allTask/people/sampleSure',
					washSure: '/pages/allTask/people/washSure',
					inDisinfect: '/pages/allTask/people/inDisinfect',
					disPeopkeSample: '/pages/allTask/people/disPeopkeSample',
					newSample: '/pages/allTask/people/newSample',
					newSampleWrite: '/pages/allTask/people/newSampleWrite',
					weakDisinSample: '/pages/allTask/people/weakDisinSample',
					weakSampleResult: '/pages/allTask/people/weakSampleResult',
					inQuarantine: '/pages/allTask/people/inQuarantine',
					beforeDisinfect: '/pages/allTask/people/beforeDisinfect',
					peopleTrans: '/pages/allTask/people/peopleTrans',
					carCheck: '/pages/allTask/people/carCheck',
					peopleRecord: '/pages/allTask/people/peopleRecord',
					peopleColorRecord: '/pages/allTask/people/peopleColorRecord',
					leaveApproval: '/pages/allTask/people/leaveApproval',
					leaveRecord: '/pages/allTask/people/leaveRecord',
					// 车辆消洗流程
					carWashRecordOne: '/pages/allTask/carWash/carWashRecordOne',
					carWashCheckOne: '/pages/allTask/carWash/carWashCheckOne',
					carWashRecordTwo: '/pages/allTask/carWash/carWashRecordTwo',
					carWashCheckTwo: '/pages/allTask/carWash/carWashCheckTwo',
					carWashTwoSample: '/pages/allTask/carWash/carWashTwoSample',
					carWashTwoResult: '/pages/allTask/carWash/carWashTwoResult',
					carWashThree: '/pages/allTask/carWash/carWashThree',
					// 中转物资流程
					transferDisinfect: '/pages/allTask/transfer/transferDisinfect',
					transferSample: '/pages/allTask/transfer/transferSample',
					materialRecord: '/pages/allTask/transfer/materialRecord',
					materialRegister: '/pages/allTask/transfer/materialRegister',
					materialResult: '/pages/allTask/transfer/materialResult',
					materialTran: '/pages/allTask/transfer/materialTran',
					materialDisinfect: '/pages/allTask/transfer/materialDisinfect',
					tranRegister: '/pages/allTask/transfer/tranRegister',
					sitDIsinfect: '/pages/allTask/transfer/sitDIsinfect',
					localRegister: '/pages/allTask/transfer/localRegister',
					wareRegister: '/pages/allTask/transfer/wareRegister',
					tranCarDisinfect: '/pages/allTask/transfer/tranCarDisinfect',
					transRegister: '/pages/allTask/transfer/transRegister',
					firstmaterRegister: '/pages/allTask/transfer/firstmaterRegister',
					// 饲料车任务
					feedUploadVideo: '/pages/allTask/feed/feedUploadVideo',
					feedCarWashTwoTable: '/pages/allTask/feed/feedCarWashTwoTable',
					feedCarWashTwoCheck: '/pages/allTask/feed/feedCarWashTwoCheck',
					feedSitWash: '/pages/allTask/feed/feedSitWash',
					feedWeakDis: '/pages/allTask/feed/feedWeakDis',
					feedWeakSample: '/pages/allTask/feed/feedWeakSample',
					feedWeakResult: '/pages/allTask/feed/feedWeakResult',
					beforePunchingUp: '/pages/allTask/feed/beforePunchingUp',
					beforePunchingSure: '/pages/allTask/feed/beforePunchingSure',
					afterPunchingUp: '/pages/allTask/feed/afterPunchingUp',
					afterPunchingRecord: '/pages/allTask/feed/afterPunchingRecord',
					afterPunchingResult: '/pages/allTask/feed/afterPunchingResult',
					// 引种猪任务
					disPeopleSample: '/pages/allTask/inPiger/disPeopleSample',
					disResultRegis: '/pages/allTask/inPiger/disResultRegis',
					carSample: '/pages/allTask/inPiger/carSample',
					carSampleResult: '/pages/allTask/inPiger/carSampleResult',
					inPigerWashSample: '/pages/allTask/inPiger/inPigerWashSample',
					inPigerSampleRecord: '/pages/allTask/inPiger/inPigerSampleRecord',
					washAndSampleSure: '/pages/allTask/inPiger/washAndSampleSure',
					sampleResultRecord: '/pages/allTask/inPiger/sampleResultRecord',
					packing: '/pages/allTask/inPiger/packing',
					backCheck: '/pages/allTask/inPiger/backCheck',
					backCheckResult: '/pages/allTask/inPiger/backCheckResult',
					afterInPigerWash: '/pages/allTask/inPiger/afterInPigerWash',
					afterSampleRecord: '/pages/allTask/inPiger/afterSampleRecord',
					// 断奶猪任务
					weanDisPeopleSample: '/pages/allTask/weanPiger/weanDisPeopleSample',
					weanDisSampleRegister: '/pages/allTask/weanPiger/weanDisSampleRegister',
					weaCarSample: '/pages/allTask/weanPiger/weaCarSample',
					weaCarSampleResult: '/pages/allTask/weanPiger/weaCarSampleResult',
					weaoutDisRecord: '/pages/allTask/weanPiger/weaoutDisRecord',
					weaWashAndSampleSure: '/pages/allTask/weanPiger/weaWashAndSampleSure',
					weaSampleResultRecord: '/pages/allTask/weanPiger/weaSampleResultRecord',
					weaInPigerWashSample: '/pages/allTask/weanPiger/weaInPigerWashSample',
					weaInPigerSampleRecord: '/pages/allTask/weanPiger/weaInPigerSampleRecord',
					weaMilkWashAndSampleSure: '/pages/allTask/weanPiger/weaMilkWashAndSampleSure',
					weaCarFatten: '/pages/allTask/weanPiger/weaCarFatten',
					weaTranCarSample: '/pages/allTask/weanPiger/weaTranCarSample',
					weaTranCarResult: '/pages/allTask/weanPiger/weaTranCarResult',
					weaTranCarDisRecord: '/pages/allTask/weanPiger/weaTranCarDisRecord',
					// 商品淘汰猪任务
					shopCarWashRecordOne: '/pages/allTask/shop/shopCarWashRecordOne',
					shopCarWashRecordTwo: '/pages/allTask/shop/shopCarWashRecordTwo',
					shopCarWashTwoSample: '/pages/allTask/shop/shopCarWashTwoSample',
					shopCarWashTwoResult: '/pages/allTask/shop/shopCarWashTwoResult',
					shopPigerWash: '/pages/allTask/shop/shopPigerWash',
					// 粪肥任务
					fertilizerCarWash: '/pages/allTask/fertilizer/fertilizerCarWash',
					fertilizerSitCarWash: '/pages/allTask/fertilizer/fertilizerSitCarWash',
					fertilizerOutRegister: '/pages/allTask/fertilizer/fertilizerOutRegister',
					// 猪场边界任务
					pigerBoundaryDis: '/pages/allTask/pigerBoundary/pigerBoundaryDis',
					pigerBoundaryPatrol: '/pages/allTask/pigerBoundary/pigerBoundaryPatrol',
					// 食材转运流程
					foodRecord: '/pages/allTask/food/foodRecord',
					foodSample: '/pages/allTask/food/foodSample',
					foodSampleResult: '/pages/allTask/food/foodSampleResult',
					foodTransRegister: '/pages/allTask/food/foodTransRegister',
					foodSitDIsinfect: '/pages/allTask/food/foodSitDIsinfect',
					foodDisAgain: '/pages/allTask/food/foodDisAgain',
					// 非中转物资流程
					noMerSampleSure: '/pages/allTask/noMer/noMerSampleSure',
					noMerSampleVideo: '/pages/allTask/noMer/noMerSampleVideo',
					noMerCarWashRecordTwo: '/pages/allTask/noMer/noMerCarWashRecordTwo',
					noMerCarWashTwoSample: '/pages/allTask/noMer/noMerCarWashTwoSample',
					noMerCarWashTwoResult: '/pages/allTask/noMer/noMerCarWashTwoResult',
					noMerRegister: '/pages/allTask/noMer/noMerRegister',
					noMerSitWash: '/pages/allTask/noMer/noMerSitWash',
					noMerchanCarSample: '/pages/allTask/noMer/noMerchanCarSample',
					noMerchanCarSampleResult: '/pages/allTask/noMer/noMerchanCarSampleResult',
					noMerchanCarDisRecord: '/pages/allTask/noMer/noMerchanCarDisRecord',
					noMerRegisterRecord: '/pages/allTask/noMer/noMerRegisterRecord',
					noMerInRecord: '/pages/allTask/noMer/noMerInRecord',
					noMerTranDIs: '/pages/allTask/noMer/noMerTranDIs',
					noMertranRegister: '/pages/allTask/noMer/noMertranRegister',
					noMerFirstRegister: '/pages/allTask/noMer/noMerFirstRegister',
				}
			}
		},
		components: {
			selfTabs,
			selfSearch,
			selfTaskMine,
			selfEmpty
		},
		onLoad() {
			
		},
		onHide() {
			this.active = 1;
		},
		methods: {
			selectHandle(e) {
				this.scrollTop = this.old.scrollTop
				this.$nextTick(function() {
					this.scrollTop = 0
				});
				this.active = e.id
			},
			searchHandle(val){
				console.log('val', val)
			},
			backHandle(e) {
				console.log('e', e)
			},
			detailHandle(e) {
				console.log('e', e)
			},
			completeHandle(e) {
				console.log('e', e)
				uni.navigateTo({ url: `${this.taskUrl[e.key]}?detail=${JSON.stringify(e)}` })
				// uni.navigateTo({ url: `/pages/allTask/guestApproval?detail=${JSON.stringify(e)}` })
			},
			colorDetailHandle(e) {
				
			},
			scroll(e) {
				this.old.scrollTop = e.detail.scrollTop
			}
		},
		onReady() {
			let _this = this
			uni.getSystemInfo({
				success(res) {
					_this.phoneHeight = res.windowHeight
					console.log(res.windowHeight)
					// 计算组件的高度
					let view = uni.createSelectorQuery().select(".main_box_content")
					console.log('view', view.style)
					view.boundingClientRect(data => {
						_this.navHeight = data.height
						console.log(_this.navHeight)
						_this.scrollviewHigh = _this.phoneHeight - _this.navHeight
					}).exec()
				}
			})
		}
	}
</script>

<style lang="scss" scoped>
	.default_bg {
		position: fixed;
		width: 100%;
		height: 100%;
		background: rgba(245,245,245,1);
	}
	.main_content {
		position: relative;
		z-index: 9;
		overflow: hidden;
	}
	.scroll_task {
		.task_content {
			width: 100%;
			box-sizing: border-box;
			padding: 24rpx 44rpx;
		}
	}
	
</style>
