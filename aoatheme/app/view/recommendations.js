var aoaRec = {
	applyVals: function(data){
			
		// filter values and label
		if(data.value.toString().length > 1){
			data.value = data.value.toFixed(1)
		}		
		2.33 > data.value && (data = {value:data.value, label:"Low"}),
		2.33 <= data.value && 3.66 > data.value && (data = {value:data.value, label:"Medium"}),
		3.66 <= data.value && (data = {value:data.value, label:"High"})
		

		var cntW = 82.5,
			valElm = Ext.getCmp('res-scale-val'),
			labelElm = Ext.getCmp('res-scale-label');

		var yPos = cntW * (data.value-1);
		valElm.setHtml(data.value);
		valElm.setStyle({left: ''+yPos+'px'});
		labelElm.setHtml(data.label)
		labelElm.setStyle({left: ''+yPos+'px'});
		aoaRec.applyValStyle(valElm,data.value);
				
	},
	applyValStyle: function(elm,val){
		if(val.toString().length > 1){
			elm.addCls('double')
		}else{
			elm.removeCls('double')
		}	
	}

};
Ext.define('aoatheme.view.recommendations', {
    extend: 'Ext.Container',
    xtype: 'recommendations',

    config: {
        title: 'Recommendations',
        layout: 'fit',
		iconCls: 'home',
        items: [
            {
                styleHtmlContent: true,
                scrollable: true,					
                items: [
					{
						docked: 'top',
						xtype: 'titlebar',
						cls: 'aoa-titlebar1',
						title: 'Dr. Marcus Welby',
						items: [
							{
								text: 'Back',
								ui: 'back',
								cls: 'aoa-modal-btn1',
								align: 'left',
								handler: function() {
									Ext.getCmp('main').setActiveItem(2)
								}
							},
							{
								text: 'Export',
								ui: 'small',
								align: 'right',
								cls: 'aoa-titlebar1-right-btn',
								handler: function() {
									/* export to PDF code */									
								}
							},
							{
								text: 'Done',
								ui: 'small',
								align: 'right',
								cls: 'aoa-titlebar1-right-btn',
								handler: function() {
									/* what's this ? */
									
									aoaRec.applyVals({value:3})
								}
							}							
						]
					},
					{
						layout: 'vbox',
						items: [
							{
								cls: 'assm-divider',
								items: {
									xtype: 'toolbar',
									docked: 'bottom',
									cls: 'aoa-list-search-toolbar',
									items: [
										{
											cls: 'assm-qheader',
											xtype: 'title',
											title: 'Biometry Recommendation'
										},
										{xtype: 'spacer'},
										{
											text: 'View notes',
											ui: 'normal',
											align: 'right',
											cls: 'assm-btn-type-a',
											handler: function() {
												/* what's this ? */
											}
										}
									]								
								}
							},
							{
								html: '<hr class="hr-divider wide"/>'
							},
							{
								layout: 'hbox',
								items: [
									{
										cls: 'assm-left-panel',
										flex: 1,
										layout: 'vbox',										
										items: [
											{
												html: '<div class="rec-calc">Calculated Score:</div>'
											},
											{
												cls: 'assmres-scale small'
											},
											{
												cls: 'assmres-scale-val rec',
												id: 'res-scale-val',
												html: '1'
											},
											{
												cls: 'assmres-scale-label rec',
												id: 'res-scale-label',
												html: 'Low'
											}
										]
									},
									{
										cls: 'assm-right-panel',
										flex: 1.7,
										items: [
											{
												cls: 'rec-content-box',
												id: 'rec-box-1',
												html:
													'<p class="rech3">Instructions: </p>'+
													'<p class="rectext">The highest score denotes proficiency in a given area. Though the practice may have an excellent grasp of effective methods in this area, you should still address the following: </p>'
											},
											{
												cls: 'rec-content-box',
												id: 'rec-box-2',
												html:
													'<p class="rech3">Conversation Starter: </p>'+
													'<p class="rectext">To help ensure positive outcomes after multifocal implantation, accurate biometry is essential. Even slight miscalculations or inconsistencies can result in a missed refractive target.</p>'
											},
											{
												cls: 'rec-content-box',
												id: 'rec-box-3',
												html:
													'<p class="rech3">Considerations: </p>'+
													'<p class="rectext">A new generation calculation method, such as the Holladay 2 or SRK/T formulas, should be used. If your notes indicate a different formula is used, discuss this with the surgeon.</p>'
											},
											{
												cls: 'rec-content-box',
												id: 'rec-box-4',
												items: [
													{
														layout: 'vbox',
														items: [
															{
																html: '<p class="rech3">Provide Requested Materials:</p>'
															},
															{
																layout: 'hbox',
																items: [
																	{
																		flex: 1,
																		layout: 'vbox',
																		items: [
																			{
																				html: '<img src="resources/images/thumb_sample.png" alt="" class="rec-thumb" />'
																			},
																			{
																				html: '<p class="rec-thumb-title">Physician/tech biometry training</p>'
																			}
																		]
																	},
																	{
																		flex: 1,
																		layout: 'vbox',
																		items: [
																			{
																				html: '<img src="resources/images/thumb_sample.png" alt="" class="rec-thumb" />'
																			},
																			{
																				html: '<p class="rec-thumb-title">Biometry guidelines</p>'
																			}
																		]
																	},
																	{
																		flex: 1,
																		layout: 'vbox',
																		items: [
																			{
																				html: '<img src="resources/images/thumb_sample.png" alt="" class="rec-thumb" />'
																			},
																			{
																				html: '<p class="rec-thumb-title">Multifocals resource guide</p>'
																			}
																		]
																	}
																]
															}
														]
														
													}
												]
											}
										]
									}
								]
							}
						]
					}					
				]
				
			}
        ]
    }
});