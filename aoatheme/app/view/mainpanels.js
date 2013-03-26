Ext.define('aoatheme.view.mainpanels', {
    extend: 'Ext.Panel',
    xtype: 'mainpanels',
	requires: [
		'Ext.TitleBar','Ext.field.Search','Ext.SegmentedButton','Ext.data.proxy.LocalStorage'
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
						xtype: 'contacts'
					}
				]
			},
			{
				xtype: 'panel',
				cls: 'aoa-right-panel',
				flex: 2,
				layout: 'vbox',
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
										html: 
											'<div class="aoa-right-panel-top-text">'+
											'	<ul>'+
											'		<li class="aoa-group-header">South Austin Medical</li>'+
											'		<li class="aoa-group-item">123-123-1234</li>'+
											'		<li class="aoa-group-item">Address Line 1</li>'+
											'		<li class="aoa-group-item">Address Line 2</li>'+
											'		<li class="aoa-group-item">email@domail.com</li>'+
											'	</ul>'+						
											'</div>'
									
									},
									{
										xtype: 'toolbar',
										docked: 'bottom',
										cls: 'aoa-list-search-toolbar',
										items: [											
											{
												ui: 'small',
												cls: 'aoa-btn-default-type-a',
												text: 'View Surgeons'
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
												ui: 'small',
												cls: 'aoa-btn-default-type-a',
												text: 'Edit'
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
															ui: 'small',
															cls: 'aoa-btn-default-type-a',
															text: 'Add'
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
								store: 'Assessments',
								cls: 'aoa-right-panel-list',
								useComponents: true,					
								itemTpl:
									'<div class="aoa-right-list-item">'+
									'	<ul class="details">'+
									'		<li><span class="aoa-bold-17">{regDate}</span></li>'+
									'		<li><span class="aoa-normal-17">{status}</span></li>'+
									'		<li class="aoa-list-item-opt aoa-normal-17">{name}</li>'+
									'	</ul>'+
									'<div class="deleteplaceholder"></div>'+
									'</div>',
								onItemDisclosure: function(){
									//alert('item open')

								},
								listeners: {
									itemswipe: function(dataview, ix, item, record, event, options) {
										if (event.direction == "left") {
											console.log(record.get('name'));										
										}
									},
									itemtap: function(dataview, ix, item, record, event, options){
										var store = Ext.getStore('LocalDoctors')
										store.load();			
										store.add({firstName: 'Walker',lastName: 'Daniel',title: 'Dr.'});
										store.sync();									
										if (!this.overlay) {
											this.overlay = Ext.Viewport.add({
												xtype: 'panel',
												modal: true,
												cls: 'aoa-modal-bg-none',
												hideOnMaskTap: false,
												showAnimation: {
													type: 'popIn',
													duration: 250,
													easing: 'ease-out'
												},
												hideAnimation: {
													type: 'popOut',
													duration: 250,
													easing: 'ease-out'
												},
												centered: true,
												height: 485,
												width: 650,
												styleHtmlContent: true,										
												items: [
													{
														docked: 'top',
														xtype: 'toolbar',
														title: 'Surgeons',
														cls: 'aoa-modal-toolbar-type-b',										
														items: [
															{
																scope: this,
																cls: 'aoa-modal-btn1',
																ui: 'back',
																text: 'Back',
																handler: function() {
																	this.overlay.hide();
																}													
															},
															{
																xtype: 'spacer'
															},
															{ iconCls: 'add',iconMask: true, cls: 'aoa-add-btn'}
														]

													},
													{
														title: 'Doctors List',
														cls: 'aoa-plain-list',
														store: 'LocalDoctors',				
														grouped: false,
														height: 390,
														pinHeaders: false,				
														xtype: 'list',
														emptyText: '<div style="margin-top: 20px; text-align: center">No Matching Items</div>',
														itemTpl: [
															'<div class="aoa-bold-17">{title} {firstName} {lastName}</div>'
														].join('')
													}											
												],
												scrollable: null
											});
										}else{
											this.overlay.show()
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