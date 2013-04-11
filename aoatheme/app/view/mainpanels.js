Ext.define('aoatheme.view.mainpanels', {
    extend: 'Ext.Panel',
    xtype: 'mainpanels',
	requires: [
		'Ext.TitleBar','Ext.field.Search','Ext.SegmentedButton','Ext.data.proxy.LocalStorage','Ext.Anim'
	],
    config: {
        layout: 'hbox',
		height: '100%',
		items: [
			{
				xtype: 'panel',
				flex: 1,				
				cls: 'aoa-left-panel-bg',
				layout: 'fit',
				items: [
					{
						xtype: 'practices'
					}
				]
			},
			{
				xtype: 'panel',
				cls: 'aoa-right-panel',
				flex: 2,
				layout: 'vbox',
				id: 'main-right-view',
				items: [
					{
						xtype: 'panel',
						flex: 1,
						layout: 'hbox',
						items: [
							{
								xtype: 'panel',
								flex: 2,
								items: [
									{
										id: 'practice-address',
										html:''									
									},
									{
										xtype: 'toolbar',
										docked: 'bottom',
										cls: 'aoa-list-search-toolbar',
										items: [											
											{
												cls: 'aoa-btn-default-type-a',
												text: 'View Surgeons',
												id: 'aoa-view-surgeons',
												handler: function(){
													if(aoa.modals.associated_doctors == null){
														aoa.modals.associated_doctors = Ext.Viewport.add({xtype: 'associated_doctors'});
													}
													var dStore = aoa.st.dct;
													dStore.filter('practice_id',aoa.refs.activePractice);
													var assocdocTitle = Ext.getCmp('associated_doctors_modal_title');
													var st = aoa.st.pr;
													st.load();
													var rec = st.getById(aoa.refs.activePractice);
													assocdocTitle.setTitle(''+rec.data.practice_name+' Doctors');
													aoa.modals.associated_doctors.show()
												}
											},
											{ xtype: 'spacer' }
										]
									}								
								
								]
							},
							{
								xtype: 'panel',
								flex: 1,								
								items: [
									{
										xtype: 'toolbar',
										docked: 'top',
										cls: 'aoa-list-search-toolbar',
										items: [
											{ xtype: 'spacer' },
											{
												cls: 'aoa-btn-default-type-a',
												text: 'Edit',
												handler: function(){
													aoa.refs.addFormMode = 'update';
													if(aoa.refs.practiceQueryMode == 'doctorID'){
														if(aoa.modals.newdoctor == null){
															aoa.modals.newdoctor = Ext.Viewport.add({xtype: 'newdoctor'});
														}
														var doctorForm = Ext.getCmp('add-new-doctor-form');
														var rec = aoa.st.dct.findRecord('id',aoa.refs.activeDoctor);
														doctorForm.setValues(rec.data)
														aoa.modals.newdoctor.show();
													}else
													if(aoa.refs.practiceQueryMode == 'practiceID'){
														if(aoa.modals.newpractice == null){															
															aoa.modals.newpractice = Ext.Viewport.add({xtype: 'newpractice'});
														}
														var practiceForm = Ext.getCmp('add-new-practice-form');
														var rec = aoa.st.pr.findRecord('id',aoa.refs.activePractice);
														practiceForm.setValues(rec.data)
														aoa.modals.newpractice.show();
													}

												}
											}									
										]
									}
								]					
							}							
						]
					},
					{
						xtype: 'panel',
						flex: 2,
						cls: 'aoa-vbox-bottom-panel',
						items: [
							{
								xtype: 'panel',
								layout: 'hbox',
								items: [
									{
										flex: 2,
										html: '<h4>Assessments</h4>'									
									},
									{
										xtype: 'panel',
										flex: 1,								
										items: [
											{
												xtype: 'toolbar',
												docked: 'top',
												cls: 'aoa-list-search-toolbar',
												items: [
													{ xtype: 'spacer' },
													{
														cls: 'aoa-btn-default-type-a',
														text: 'Add',
														handler: function(){
															var qsetID = assm.insertEmptyRecord();
															var assmStore = aoa.st.asm;
															assmStore.load();	
															var d=new Date,day=d.getDate(),month=d.getMonth()+1,year=d.getFullYear(),fulldate=day+'/'+month+'/'+year,
																newassm = assmStore.add({regDate: fulldate,status: 'In progress',doctorID:'',doctorName:'',practiceID: aoa.refs.activePractice,timestamp:d.getTime(),qsetID:qsetID});
															assmStore.sync();	
														}
													}									
												]
											}
										]					
									}									
								]
							},
							{
								height: 138,
								xtype: 'list',
								store: 'assessments',
								cls: 'aoa-right-panel-list',
								id: 'assessment-list',
								useComponents: true,
								scope: this,
								itemTpl:
									'<div class="aoa-right-list-item <tpl if="doctorID == \'\'">no-leaf</tpl>">'+
									'	<ul class="details">'+
									'		<li style="width:20%"><span class="aoa-bold-17">{regDate}</span></li>'+
									'		<li style="width:20%"><span class="aoa-normal-17">{status}</span></li>'+
									'		<li style="width:45%" class="aoa-list-item-opt aoa-normal-17" id="{id}"><tpl><tpl if="doctorID == \'\'"><div class="x-button-normal x-button aoa-btn-default-type-a aoa-inlinebtn x-layout-box-item x-stretched"><span class="x-button-label">Add Doctor</span></div><tpl else>{doctorName}</tpl></tpl></li>'+
									'	</ul>'+
									aoa.tmpl.remove +
									'</div>',
								onItemDisclosure: function(record){
									var assmPageTitle = Ext.getCmp('assm-page-title');
									assmPageTitle.setTitle(record.data.doctorName);
									aoa.refs.activeQset = record.data.qsetID;
									console.log(aoa.refs.activeQset);
									assm.setFieldValues(record.data.qsetID);
									Ext.getCmp('main').setActiveItem('assessmentedit');
								},
								listeners: {
									itemswipe: function(dataview, ix, item, record, event, options) {
										if (event.direction == "left") {
											aoa.events.deleteItemActive = true;
											var deleteElm = Ext.get('rem-'+record.data.id+'');
											deleteElm.addCls('ready-todelete');
											var abortDel = Ext.get('abort-rem-'+record.data.id+'');
											abortDel.on('tap',function(){deleteElm.removeCls('ready-todelete');aoa.events.deleteItemActive = false});
											var confirmRemove = Ext.get('confirm-rem-'+record.data.id+'');
											confirmRemove.on('tap',function(){	
												Ext.Anim.run(item, 'fade', {
													after: function() {
														var st = aoa.st.asm;
														st.remove(record);
														st.sync();
														aoa.events.deleteItemActive = false;
														var qsetID = record.data.qsetID,
															qstore = aoa.st.qset;
														var qrec = qstore.findRecord('id',qsetID);
														qstore.remove(qrec);
														qstore.sync();
													},
													out: true
												});	
											});
										}
									},
									itemtap: function(dataview, ix, item, record, event, options){
										var btnTap = aoa.utils.hasCls(event.target,'x-button-label') || aoa.utils.hasCls(event.target,'aoa-inlinebtn');
										aoa.refs.activeAssessment = record.data.id;
										if(btnTap == true && aoa.events.deleteItemActive == false){											
											if (aoa.modals.selectDoctor == null){
												aoa.modals.selectDoctor = Ext.Viewport.add({xtype:'selectdoctor'});
											}
											aoa.modals.selectDoctor.show()
										}
									}
								},
								variableHeights: false
							},
							{
								xtype: 'textareafield',
								placeHolder: 'Notes',
								width: '75%',
								cls: 'aoa-right-panel-textarea'
							}						
						]
					}					

				]
			}
		]
    }
});