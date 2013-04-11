var assm = {
	doUpdate: false,
	setFieldValues: function(){
		var st = aoa.st.qset;
		st.load();
		var qset = st.findRecord('id',aoa.refs.activeQset).data;		
		for(i in qset){
			var q = qset[i];
			if(q.type){ // check if edited, if is other type of field and if is not a note field
				var progressDot = Ext.getCmp('pr-'+i+'');
				progressDot.addCls('checked');
				if(q.type == 'checkbox'){
					var checkBoxes = Ext.ComponentQuery.query('checkboxfield[name="'+i+'"]');
					var checked = q.value;
					for(j=0;j<checked.length;j++){
						if(checked[j] == true){
							checkBoxes[j].check();
							checkBoxes[j].addCls('checked');
						}
					}
				}else
				if(q.type == 'radiofield'){
					var radioFields = Ext.ComponentQuery.query('radiofield[name="'+i+'"]');
					var checked = q.value;
					radioFields[checked].check();
					radioFields[checked].addCls('checked');
				}
			}else{
				if(i.search('notes') != -1){
					var noteText = qset[i];						
					if(!qset[i].text){
						Ext.getCmp(''+i+'-add').show();
					}else{
						Ext.getCmp(''+i+'-edit').show();
					}
				}
			}
		}
		assm.doUpdate = true;
		assm.setProgressVal();
		assm.setResultsCheck()
	},
	setResultsCheck: function(){
		var elm = Ext.DomQuery.select('#dots10-a .checked');
		if(elm.length == 10){
			Ext.getCmp('pr-qs1').addCls('checked');
		}
		elm = Ext.DomQuery.select('#dots7-a .checked');
		if(elm.length == 7){
			Ext.getCmp('pr-qs2').addCls('checked');
		}
		elm = Ext.DomQuery.select('#dots7-b .checked');
		if(elm.length == 7){
			Ext.getCmp('pr-qs3').addCls('checked');
		}
		elm = Ext.DomQuery.select('#dots10-b .checked');
		if(elm.length == 10){
			Ext.getCmp('pr-qs4').addCls('checked');
		}
		elm = Ext.DomQuery.select('#dots7-c .checked');
		if(elm.length == 7){
			Ext.getCmp('pr-qs5').addCls('checked');
		}
	},
	setProgressVal: function(){
		var st = aoa.st.qset;
		st.load();
		var qset = st.findRecord('id',aoa.refs.activeQset).data;
		var slider = Ext.getCmp('assm-progress-bar');
		var pval = 0, pmax = 41, sliderVal = 0;
		for(i in qset){
			var q = qset[i];
			if(q.type){ // check if edited, if is other type of field and if is not a note field
				pval++
			}
		}
		if(pval>0){			
			sliderVal = 100/(pmax/pval)
		}
		addRule('.aoa-progress-dock .x-slider:after', {
			background: 'linear-gradient(to right, rgba(70,135,148,1) 0%,rgba(70,135,148,1) '+(sliderVal-.1)+'%,rgba(156,178,187,1) '+sliderVal+'%,rgba(156,178,187,1) 100%);'
		});
		slider.setValue(sliderVal);	
		
	},
	insertEmptyRecord: function(){
		var st = aoa.st.qset;
		st.load();
		var emptyRec = aoa.emptyQset();
		var added = st.add(emptyRec);
		st.sync();
		return added[0].id
	},
	updateRecord: function(type,fieldName){
		var st = aoa.st.qset;
		st.load();
		var qset = st.findRecord('id',aoa.refs.activeQset);
		if(type == 'checkbox'){
			var checkBoxes = Ext.ComponentQuery.query('checkboxfield[name="'+fieldName+'"]');
			var updatedVal = [
				checkBoxes[0].getChecked(),
				checkBoxes[1].getChecked(),
				checkBoxes[2].getChecked(),
				checkBoxes[3].getChecked(),
				checkBoxes[4].getChecked(),
			];
			var val = {
				type: 'checkbox',
				value: updatedVal
			};
			qset.set(fieldName,val);
			st.sync()
		}		
		if(type == 'radiofield'){
			var radios = Ext.ComponentQuery.query('checkboxfield[name="'+fieldName+'"]');
			var radioChecked;
			for(i=0;i<radios.length;i++){
				if(radios[i].getChecked() == true) radioChecked = i;
			}
			var val = {
				type: 'radiofield',
				value: radioChecked
			};
			qset.set(fieldName,val);
			st.sync()
		}
		var progressDot = Ext.getCmp('pr-'+fieldName+'');
		progressDot.addCls('checked');
		assm.setProgressVal();
		assm.setResultsCheck();
	},
	editListeners: {
		checkbox: {
			change: function(a,b,c,d){
				if(assm.doUpdate == false) return false;				
				var check = this.getChecked();				
				if(check == true){
					this.addCls('checked')
				}else{
					this.removeCls('checked')
				}
				assm.updateRecord('checkbox',this.config.name)
			},
			initialize: function(){
				var check = this.getChecked();
				if(check == true){
					this.addCls('checked')
				}		
			}
		},
		radiofield:{
			check: function(radioFld, event, obj){
				if(assm.doUpdate == false) return false;
				var selectedValue = radioFld.getValue(),
					fieldSetName = radioFld.config.name;
				var q2Radios = Ext.ComponentQuery.query('radiofield[name="'+fieldSetName+'"]');
				for(i=0;i<q2Radios.length;i++){
					if(i+1 == selectedValue){
						radioFld.addCls('checked');
					}else{
						q2Radios[i].removeCls('checked');
					}					
				}
				assm.updateRecord('radiofield',this.config.name)
			},
			initialize: function(){
				var check = this.getChecked();
				if(check == true){
					this.addCls('checked')
				}		
			}
		},
	}
};
var addRule = (function(style){
    var sheet = document.head.appendChild(style).sheet;
    return function(selector, css){
        var propText = Object.keys(css).map(function(p){
            return p+':'+css[p]
        }).join(';');
        sheet.insertRule(selector + '{' + propText + '}', sheet.cssRules.length);
    }
})(document.createElement('style'));


Ext.define('aoatheme.view.assessmentedit', {
    extend: 'Ext.Container',
    xtype: 'assessmentedit',
	id: 'assessmentedit',
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
						title: '',
						id: 'assm-page-title',
						items: [
							{
								text: 'Back',
								ui: 'back',
								cls: 'aoa-modal-btn1',
								align: 'left',
								handler: function() {
									Ext.getCmp('main').setActiveItem(0)
								}
							},
							{
								text: 'Edit',
								ui: 'small',
								align: 'right',
								cls: 'aoa-titlebar1-right-btn',
								handler: function() {
									this.hide();
									var elems = Ext.ComponentQuery.query('[name="assm-edit-only"]')
									for(i=0;i<elems.length;i++){
										elems[i].show();										
									}
									var elems = Ext.ComponentQuery.query('fieldset[name="q-fieldset"]')
									for(i=0;i<elems.length;i++){
										elems[i].enable();										
									}									
									
								}
							},
							{
								text: 'Notes',
								ui: 'small',
								align: 'right',
								cls: 'aoa-titlebar1-right-btn',
								handler: function() {
									if(aoa.modals.notes == null){
										aoa.modals.notes = Ext.Viewport.add({xtype: 'notes'});
									}else{
										aoa.modals.notes.show()
									}
								}
							}							
						]
					},
					{
						layout: 'vbox',
						items: [
							{xtype: 'clinicalsuccess'},
							{xtype: 'lifestyleassm'},
							{xtype: 'stafftraining'},
							{xtype: 'patientexperience'},
							{xtype: 'lensrecommendation'}
						]
					},
					{
						xtype: 'panel',
						docked: 'bottom',
						cls: 'aoa-progress-dock',				
						items: [
							{
								layout: 'vbox',
								items: [
									{
										layout: 'hbox',
										defaults: {
											width: '16.6%',
											cls: 'progress-group',
											flex: 1.6
										},
										items: [										
											{
												layout: 'vbox',												
												items: [
													{cls: 'assm-progress-label',html: 'Clinical Success'},
													{
														cls: 'dots10',
														id: 'dots10-a',
														layout: 'hbox',
														items: [
															{
																cls: 'progress-dot',
																id: 'pr-bq1'
															},
															{
																cls: 'progress-dot',
																id: 'pr-bq2'
															},
															{
																cls: 'progress-dot',
																id: 'pr-bq3'
															},
															{
																cls: 'progress-dot',
																id: 'pr-bq4'
															},
															{
																cls: 'progress-dot',
																id: 'pr-iq1'
															},
															{
																cls: 'progress-dot',
																id: 'pr-iq2'
															},
															{
																cls: 'progress-dot',
																id: 'pr-iq3'
															},
															{
																cls: 'progress-dot',
																id: 'pr-poq1'
															},
															{
																cls: 'progress-dot',
																id: 'pr-poq2'
															},
															{
																cls: 'progress-dot',
																id: 'pr-poq3'
															}
														]
													}
												],
											},
											{
												layout: 'vbox',
												items: [
													{cls: 'assm-progress-label',html:'Lifestyle Assessment'},
													{
														cls: 'dots7',
														id: 'dots7-a',
														layout: 'hbox',
														items: [
															{
																cls: 'progress-dot',
																id: 'pr-pqq1'
															},
															{
																cls: 'progress-dot',
																id: 'pr-pqq2'
															},
															{
																cls: 'progress-dot',
																id: 'pr-pqq3'
															},
															{
																cls: 'progress-dot',
																id: 'pr-pqq4'
															},
															{
																cls: 'progress-dot',
																id: 'pr-psq1'
															},
															{
																cls: 'progress-dot',
																id: 'pr-psq2'
															},
															{
																cls: 'progress-dot',
																id: 'pr-psq3'
															}
														]
													},
												]
											},
											{
												layout: 'vbox',
												items: [
													{cls: 'assm-progress-label',html:'Staff Training'},
													{
														cls: 'dots7',
														id: 'dots7-b',
														layout: 'hbox',
														items: [
															{
																cls: 'progress-dot',
																id: 'pr-stq1'
															},
															{
																cls: 'progress-dot',
																id: 'pr-stq2'
															},
															{
																cls: 'progress-dot',
																id: 'pr-stq3'
															},
															{
																cls: 'progress-dot',
																id: 'pr-stq4'
															},
															{
																cls: 'progress-dot',
																id: 'pr-stq5'
															},
															{
																cls: 'progress-dot',
																id: 'pr-stq6'
															},
															{
																cls: 'progress-dot',
																id: 'pr-stq7'
															}
														]
													}
												]
											},
											{												
												layout: 'vbox',
												items: [
													{cls: 'assm-progress-label',html:'Patient Experience'},
													{
														cls: 'dots10',
														id: 'dots10-b',
														layout: 'hbox',
														items: [
															{
																cls: 'progress-dot',
																id: 'pr-peq1'
															},
															{
																cls: 'progress-dot',
																id: 'pr-peq2'
															},
															{
																cls: 'progress-dot',
																id: 'pr-peq3'
															},
															{
																cls: 'progress-dot',
																id: 'pr-peq4'
															},
															{
																cls: 'progress-dot',
																id: 'pr-pjq1'
															},
															{
																cls: 'progress-dot',
																id: 'pr-pjq2'
															},
															{
																cls: 'progress-dot',
																id: 'pr-pjq3'
															},
															{
																cls: 'progress-dot',
																id: 'pr-pjq4'
															},
															{
																cls: 'progress-dot',
																id: 'pr-pjq5'
															},
															{
																cls: 'progress-dot',
																id: 'pr-pjq6'
															}
														]
													}
												]
											},
											{
												layout: 'vbox',
												items: [
													{cls: 'assm-progress-label',html:'Multifocal Recommendation'},
													{
														cls: 'dots7',
														id: 'dots7-c',
														layout: 'hbox',
														items: [
															{
																cls: 'progress-dot',
																id: 'pr-lrq1'
															},
															{
																cls: 'progress-dot',
																id: 'pr-lrq2'
															},
															{
																cls: 'progress-dot',
																id: 'pr-lrq3'
															},
															{
																cls: 'progress-dot',
																id: 'pr-lrq4'
															},
															{
																cls: 'progress-dot',
																id: 'pr-lrq5'
															},
															{
																cls: 'progress-dot',
																id: 'pr-lrq6'
															},
															{
																cls: 'progress-dot',
																id: 'pr-lrq7'
															}
														]
													}													
												]
											},
											{
												layout: 'vbox',
												items: [
													{cls: 'assm-progress-label',html:'Results'},
													{
														cls: 'dots5',
														id: 'dots5',
														layout: 'hbox',
														items: [
															{
																cls: 'progress-dot',
																id: 'pr-qs1'
															},
															{
																cls: 'progress-dot',
																id: 'pr-qs2'
															},
															{
																cls: 'progress-dot',
																id: 'pr-qs3'
															},
															{
																cls: 'progress-dot',
																id: 'pr-qs4'
															},
															{
																cls: 'progress-dot',
																id: 'pr-qs5'
															}
														]
													}
												]
											}										
										]
									},
									{
										xtype: 'fieldset',
										items: [
											{
												xtype: 'sliderfield',
												name: 'assm-progress',
												id: 'assm-progress-bar',
												value: 0,
												disabled: true,
												listeners: {
													change: function(elm, sl, thumb, newValue, oldValue, eOpts){
														addRule('.aoa-progress-dock .x-slider:after', {
															background: 'linear-gradient(to right, rgba(70,135,148,1) 0%,rgba(70,135,148,1) '+(newValue-.1)+'%,rgba(156,178,187,1) '+newValue+'%,rgba(156,178,187,1) 100%);'
														});
													}
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
});


