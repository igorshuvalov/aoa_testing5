var aoaRes = {
	applyVals: function(data){
			
		// filter values and label
		for(i in data){
			if(data[i].toString().length > 1){
				data[i] = data[i].toFixed(1)
			}
		}
		for(i in data) {
			2.33 > data[i] && (data[i] = {value:data[i], label:"Low"}),
			2.33 <= data[i] && 3.66 > data[i] && (data[i] = {value:data[i], label:"Medium"}),
			3.66 <= data[i] && (data[i] = {value:data[i], label:"High"})
		};
		var cntW = 97,
			// clinical success ids
			bioresVal = Ext.getCmp('biometry-res-val'),
			bioresLabel = Ext.getCmp('biometry-res-label'),
			impresVal = Ext.getCmp('implant-res-val'),
			impresLabel = Ext.getCmp('implant-res-label'),
			postopevalVal = Ext.getCmp('postopeval-res-val'),
			postopevalLabel = Ext.getCmp('postopeval-res-label'),
			// Lifestyle Assessment ids
			patientqVal = Ext.getCmp('patientq-res-val'),
			patientqLabel = Ext.getCmp('patientq-res-label'),
			patientsVal = Ext.getCmp('patients-res-val'),
			patientsLabel = Ext.getCmp('patients-res-label'),
			postopeval2Val = Ext.getCmp('postopeval2-res-val'),
			postopeval2Label = Ext.getCmp('postopeval2-res-label');

			
		for(i in data){
			switch(i){
				case 'biometry':
					var valElm = bioresVal,	labelElm = bioresLabel;
					break;
				case 'implantation':
					var valElm = impresVal,	labelElm = impresLabel;
					break;
				case 'postOpEvaluation':
					var valElm = postopevalVal, labelElm = postopevalLabel;
					break;
					
				case 'patientQ':
					var valElm = patientqVal, labelElm = patientqLabel;
					break;
				case 'patientS':
					var valElm = patientsVal, labelElm = patientsLabel;
					break;
				case 'postOpEvaluation2':
					var valElm = postopeval2Val, labelElm = postopeval2Label;
					break;
			}
			var yPos = cntW * (data[i].value-1);
			valElm.setHtml(data[i].value);
			valElm.setStyle({left: ''+yPos+'px'});
			labelElm.setHtml(data[i].label)
			labelElm.setStyle({left: ''+yPos+'px'});
			aoaRes.applyValStyle(valElm,data[i].value);
		}		
	},
	applyValStyle: function(elm,val){
		if(val.toString().length > 1){
			elm.addCls('double')
		}else{
			elm.removeCls('double')
		}	
	}

};
Ext.define('aoatheme.view.assmresults', {
    extend: 'Ext.Container',
    xtype: 'assmresults',

    config: {
        title: 'Edit',
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
									Ext.getCmp('main').setActiveItem(1)
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
									var vals = {
										biometry: 1.5,
										implantation: 2.5,
										postOpEvaluation: 3.5,
										patientQ: 4.5,
										patientS: 1.75,
										postOpEvaluation2: 3.77
									};
									aoaRes.applyVals(vals)
								}
							}							
						]
					},
					{
						layout: 'vbox',
						items: [
							{
								cls: 'assm-divider',
								html: '<div class="assm-h1">Analysis</div>'
							},							
							{
								html: '<hr class="hr-divider wide"/>'
							},
							/*   Clinical Success  */
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
											title: 'Clinical Success'
										},
										{xtype: 'spacer'},
										{
											text: 'View notes',
											ui: 'normal',
											align: 'right',
											cls: 'assm-btn-type-a',
											handler: function() {
												/* what's this ? */
												var vals = {
													biometry: 3.4,
													implantation: 5,
													postOpEvaluation: 2.7
												};
												aoaRes.applyVals(vals)
											}
										}
									]								
								}
							},					
							{
								html: '<hr class="hr-divider"/>'
							},							
							/* Biometry */
							{
								cls: 'assm-divider assmres-vholder',
								layout: 'hbox',
								items: [
									{
										cls: 'assm-left-panel',
										flex: 1.3,
										layout: 'vbox',
										items:[
											{
												cls: 'assm-h2',
												html: 'Biometry'
											}											
										]
									},
									{										
										flex: 1.95,
										layout: 'vbox',										
										items: [
											{
												cls: 'assmres-scale'
											},
											{
												cls: 'assmres-scale-val',
												id: 'biometry-res-val',
												html: '1'
											},
											{
												cls: 'assmres-scale-label',
												id: 'biometry-res-label',
												html: 'Low'
											}
										]
										
									},
									{
										cls: 'assm-right-panel',
										flex: 1.3,
										items: [
												{
													xtype: 'toolbar',
													docked: 'bottom',
													cls: 'aoa-list-search-toolbar',
													items: [
														{ xtype: 'spacer' },
														{
															ui: 'normal',
															cls: 'assm-btn-type-b',
															text: 'View Recommendation',
															scope: this,
															handler: function() {
																Ext.getCmp('main').setActiveItem(3)
															}
														}
													]
												}
										
										]
									}
								]
							},
							{
								html: '<hr class="hr-divider"/>'
							},
							/* Implantation */
							{
								cls: 'assm-divider assmres-vholder',
								layout: 'hbox',
								items: [
									{
										cls: 'assm-left-panel',
										flex: 1.3,
										layout: 'vbox',
										items:[
											{
												cls: 'assm-h2',
												html: 'Implantation'
											}											
										]
									},
									{										
										flex: 1.95,
										layout: 'vbox',										
										items: [
											{
												cls: 'assmres-scale'
											},
											{
												cls: 'assmres-scale-val',
												id: 'implant-res-val',
												html: '1'
											},
											{
												cls: 'assmres-scale-label',
												id: 'implant-res-label',
												html: 'Low'
											}
										]
										
									},
									{
										cls: 'assm-right-panel',
										flex: 1.3,
										items: [
												{
													xtype: 'toolbar',
													docked: 'bottom',
													cls: 'aoa-list-search-toolbar',
													items: [
														{ xtype: 'spacer' },
														{
															ui: 'normal',
															cls: 'assm-btn-type-b',
															text: 'View Recommendation',
															scope: this,
															handler: function() {
																Ext.getCmp('main').setActiveItem(3)
															}
														}
													]
												}
										
										]
									}
								]
							},							
							{
								html: '<hr class="hr-divider"/>'
							},
							/* Post-op Evaluation */
							{
								cls: 'assm-divider assmres-vholder',
								layout: 'hbox',
								items: [
									{
										cls: 'assm-left-panel',
										flex: 1.3,
										layout: 'vbox',
										items:[
											{
												cls: 'assm-h2',
												html: 'Post-op Evaluation'
											}											
										]
									},
									{										
										flex: 1.95,
										layout: 'vbox',
										items: [
											{
												cls: 'assmres-scale'
											},
											{
												cls: 'assmres-scale-val',
												id: 'postopeval-res-val',
												html: '1'
											},
											{
												cls: 'assmres-scale-label',
												id: 'postopeval-res-label',
												html: 'Low'
											}
										]
										
									},
									{
										cls: 'assm-right-panel',
										flex: 1.3,
										items: [
												{
													xtype: 'toolbar',
													docked: 'bottom',
													cls: 'aoa-list-search-toolbar',
													items: [
														{ xtype: 'spacer' },
														{
															ui: 'normal',
															cls: 'assm-btn-type-b',
															text: 'View Recommendation',
															scope: this,
															handler: function() {
																Ext.getCmp('main').setActiveItem(3)
															}
														}
													]
												}
										
										]
									}
								]
							},
							{
								html: '<hr class="hr-divider"/>'
							},						
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
											title: 'Lifestyle Assessment'
										},
										{xtype: 'spacer'},
										{
											text: 'View notes',
											ui: 'normal',
											align: 'right',
											cls: 'assm-btn-type-a',
											handler: function() {

											}
										}
									]								
								}
							},					
							{
								html: '<hr class="hr-divider"/>'
							},			
							/* Patient Questionnaire */
							{
								cls: 'assm-divider assmres-vholder',
								layout: 'hbox',
								items: [
									{
										cls: 'assm-left-panel',
										flex: 1.3,
										layout: 'vbox',
										items:[
											{
												cls: 'assm-h2',
												html: 'Patient Questionnaire'
											}											
										]
									},
									{										
										flex: 1.95,
										layout: 'vbox',										
										items: [
											{
												cls: 'assmres-scale'
											},
											{
												cls: 'assmres-scale-val',
												id: 'patientq-res-val',
												html: '1'
											},
											{
												cls: 'assmres-scale-label',
												id: 'patientq-res-label',
												html: 'Low'
											}
										]
										
									},
									{
										cls: 'assm-right-panel',
										flex: 1.3,
										items: [
												{
													xtype: 'toolbar',
													docked: 'bottom',
													cls: 'aoa-list-search-toolbar',
													items: [
														{ xtype: 'spacer' },
														{
															ui: 'normal',
															cls: 'assm-btn-type-b',
															text: 'View Recommendation',
															scope: this,
															handler: function() {
																Ext.getCmp('main').setActiveItem(3)
															}
														}
													]
												}
										
										]
									}
								]
							},
							{
								html: '<hr class="hr-divider"/>'
							},
							/* Patient Selection */
							{
								cls: 'assm-divider assmres-vholder',
								layout: 'hbox',
								items: [
									{
										cls: 'assm-left-panel',
										flex: 1.3,
										layout: 'vbox',
										items:[
											{
												cls: 'assm-h2',
												html: 'Patient Selection'
											}											
										]
									},
									{										
										flex: 1.95,
										layout: 'vbox',										
										items: [
											{
												cls: 'assmres-scale'
											},
											{
												cls: 'assmres-scale-val',
												id: 'patients-res-val',
												html: '1'
											},
											{
												cls: 'assmres-scale-label',
												id: 'patients-res-label',
												html: 'Low'
											}
										]
										
									},
									{
										cls: 'assm-right-panel',
										flex: 1.3,
										items: [
												{
													xtype: 'toolbar',
													docked: 'bottom',
													cls: 'aoa-list-search-toolbar',
													items: [
														{ xtype: 'spacer' },
														{
															ui: 'normal',
															cls: 'assm-btn-type-b',
															text: 'View Recommendation',
															scope: this,
															handler: function() {
																Ext.getCmp('main').setActiveItem(3)
															}
														}
													]
												}
										
										]
									}
								]
							},
							{
								html: '<hr class="hr-divider"/>'
							},
							/* Post-op Evaluation */
							{
								cls: 'assm-divider assmres-vholder',
								layout: 'hbox',
								items: [
									{
										cls: 'assm-left-panel',
										flex: 1.3,
										layout: 'vbox',
										items:[
											{
												cls: 'assm-h2',
												html: 'Post-op Evaluation'
											}											
										]
									},
									{										
										flex: 1.95,
										layout: 'vbox',
										items: [
											{
												cls: 'assmres-scale'
											},
											{
												cls: 'assmres-scale-val',
												id: 'postopeval2-res-val',
												html: '1'
											},
											{
												cls: 'assmres-scale-label',
												id: 'postopeval2-res-label',
												html: 'Low'
											}
										]
										
									},
									{
										cls: 'assm-right-panel',
										flex: 1.3,
										items: [
												{
													xtype: 'toolbar',
													docked: 'bottom',
													cls: 'aoa-list-search-toolbar',
													items: [
														{ xtype: 'spacer' },
														{
															ui: 'normal',
															cls: 'assm-btn-type-b',
															text: 'View Recommendation',
															scope: this,
															handler: function() {
																Ext.getCmp('main').setActiveItem(3)
															}
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