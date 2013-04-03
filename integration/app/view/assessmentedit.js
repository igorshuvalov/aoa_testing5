var assm = {
	editListeners: {
		checkbox: {
			change: function(){
				var check = this.getChecked();
				if(check == true){
					this.addCls('checked')
				}else{
					this.removeCls('checked')
				}				
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


Ext.define('aoa.view.assessmentedit', {
    extend: 'Ext.Container',
    xtype: 'assessmentedit',

    config: {
        title: 'Edit',
        layout: 'fit',
		iconCls: 'home',
		showAnimation: 'slideIn',
		hideAnimation: 'slideOut',
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
									Ext.Viewport.getActiveItem().hide()
									Ext.Viewport.setActiveItem({xtype:'main'});
								}
							},
							{
								text: 'Edit',
								ui: 'small',
								align: 'right',
								id: 'assm-edit-btn',
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
									/* what's this ? */
								}
							}							
						]
					},
					{
						id: 'assm-qs-section',
						layout: 'vbox',
						items: [
							{
								cls: 'assm-divider',
								html: '<div class="assm-h1">Clinical Success</div>'
							},
							
							
							/* Biometry */
							{
								cls: 'assm-divider',
								items: {
									xtype: 'toolbar',
									docked: 'bottom',
									cls: 'aoa-list-search-toolbar',
									items: [
										{
											cls: 'assm-h2',
											xtype: 'title',
											title: 'Biometry (4 Questions)'
										},
										{xtype: 'spacer'},
										{
											text: 'Add a note',
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
							
							
							/* question 1 */
							{
								cls: 'assm-divider',
								layout: 'hbox',
								items: [
									{
										cls: 'assm-left-panel',
										flex: 1.7,
										layout: 'vbox',
										items:[
											{
												cls: 'assm-qheader',
												html: 'Question 1'
											},
											{
												cls: 'assm-qtext',
												html: '1. What method is used for measuring patient biometry?'											
											}
											
										]
									},
									{
										cls: 'assm-right-panel',
										flex: 2,
										items: [
											{
												layout: 'vbox',
												xtype: 'fieldset',
												disabled: true,
												name: 'q-fieldset',
												disabled: true,
												items: [
													{
														layout: 'hbox',
														items:[
															{
																layout: 'vbox',
																cls: 'assm-field-group',
																items: [
																	{
																		xtype: 'checkboxfield',
																		name: 'biometry-q1',
																		cls: 'assm-form-field-check',
																		value: 1,
																		checked: true,
																		scope: this,
																		listeners: assm.editListeners.checkbox
																	},
																	{
																		html: '<div class="assm-q-opt-label">Applanation ultrasound with simulated k&rsquo;s from topography</div>'
																	}
																]
															},
															{
																layout: 'vbox',
																cls: 'assm-field-group',
																items: [
																	{
																		xtype: 'checkboxfield',
																		name: 'biometry-q1',
																		cls: 'assm-form-field-check',
																		value: 2,
																		scope: this,
																		listeners: assm.editListeners.checkbox
																	},
																	{
																		html: '<div class="assm-q-opt-label">Applanation ultrasound with manual or automated keratometry</div>'
																	}
																]
															},
															{
																layout: 'vbox',
																cls: 'assm-field-group',
																items: [
																	{
																		xtype: 'checkboxfield',
																		name: 'biometry-q1',
																		cls: 'assm-form-field-check',
																		value: 3,
																		scope: this,
																		listeners: assm.editListeners.checkbox
																	},
																	{
																		html: '<div class="assm-q-opt-label">Immersion ultrasound with simulated k&rsquo;s from topography</div>'
																	}
																]
															},
															{
																layout: 'vbox',
																cls: 'assm-field-group',
																items: [
																	{
																		xtype: 'checkboxfield',
																		name: 'biometry-q1',
																		cls: 'assm-form-field-check',
																		value: 4,
																		scope: this,
																		listeners: assm.editListeners.checkbox
																	},
																	{
																		html: '<div class="assm-q-opt-label">Immersion ultrasound with manual or automated keratometry</div>'
																	}
																]
															},
															{
																layout: 'vbox',
																cls: 'assm-field-group',
																items: [
																	{
																		xtype: 'checkboxfield',
																		name: 'biometry-q1',
																		cls: 'assm-form-field-check',
																		value: 5,
																		scope: this,
																		listeners: assm.editListeners.checkbox
																	},
																	{
																		html: '<div class="assm-q-opt-label">Integrated optical biometry (e.g., IOLMaster, Lenstar)</div>'
																	}
																]
															}
														]
													},
													{
														/* edit comments button */			
														hidden: true,
														name: 'assm-edit-only',
														cls: 'assm-edit-btn',
														items: {
															xtype: 'toolbar',
															docked: 'bottom',
															cls: 'aoa-list-search-toolbar',
															items: [
																{xtype: 'spacer'},
																{
																	text: 'Edit Comments',
																	ui: 'normal',
																	align: 'right',
																	cls: 'assm-btn-type-b',
																	handler: function() {
																		/* what's this ? */
																	}
																}
															]								
														}													
													}
												]
											}
										
										]
									}
								]
							},
							/* question 2 */
							{
								cls: 'assm-divider',
								layout: 'hbox',
								items: [
									{
										cls: 'assm-left-panel',
										flex: 1.7,
										layout: 'vbox',
										items:[
											{
												cls: 'assm-qheader',
												html: 'Question 2'
											},
											{
												cls: 'assm-qtext',
												html: 'How often are biometry measurements verified?'											
											}
											
										]										
									},
									{
										cls: 'assm-right-panel',
										flex: 2,
										items: [
											{
												layout: 'vbox',
												xtype: 'fieldset',
												name: 'q-fieldset',
												disabled: true,
												items: [
													{
														layout: 'hbox',
														items:[
															{
																layout: 'vbox',
																cls: 'assm-field-group',
																items: [
																	{
																		xtype: 'radiofield',
																		name: 'biometry-q2',
																		cls: 'assm-form-field-radio1',
																		value: 1,
																		scope: this,
																		listeners: assm.editListeners.radiofield
																	},
																	{
																		html: '<div class="assm-q-opt-label">(Never)</div>'
																	}
																]
															},
															{
																layout: 'vbox',
																cls: 'assm-field-group',
																items: [
																	{
																		xtype: 'radiofield',
																		name: 'biometry-q2',
																		cls: 'assm-form-field-radio2',
																		value: 2,
																		scope: this,
																		checked: true,
																		listeners: assm.editListeners.radiofield
																	}
																]
															},
															{
																layout: 'vbox',
																cls: 'assm-field-group',
																items: [
																	{
																		xtype: 'radiofield',
																		name: 'biometry-q2',
																		cls: 'assm-form-field-radio3',
																		value: 3,
																		scope: this,
																		listeners: assm.editListeners.radiofield
																	}
																]
															},
															{
																layout: 'vbox',
																cls: 'assm-field-group',
																items: [
																	{
																		xtype: 'radiofield',
																		name: 'biometry-q2',
																		cls: 'assm-form-field-radio4',
																		value: 4,
																		scope: this,
																		listeners: assm.editListeners.radiofield
																	}
																]
															},
															{
																layout: 'vbox',
																cls: 'assm-field-group',
																items: [
																	{
																		xtype: 'radiofield',
																		name: 'biometry-q2',
																		cls: 'assm-form-field-radio5',
																		value: 5,
																		scope: this,
																		listeners: assm.editListeners.radiofield
																	},
																	{
																		html: '<div class="assm-q-opt-label">(Always)</div>'
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
							},
							/* question 3 */
							{
								cls: 'assm-divider',
								layout: 'hbox',
								items: [
									{
										cls: 'assm-left-panel',
										flex: 1.7,
										layout: 'vbox',
										items:[
											{
												cls: 'assm-qheader',
												html: 'Question 3'
											},
											{
												cls: 'assm-qtext',
												html: 'Which of the following advanced diagnostic evaluation '+
												'tools or methods does the surgeon use? '+
												'(Select all that apply)'											
											}
											
										]
									},
									{
										cls: 'assm-right-panel',
										flex: 2,
										items: [
											{
												layout: 'vbox',
												items: [
													{
														layout: 'hbox',
														xtype: 'fieldset',
														name: 'q-fieldset',
														disabled: true,
														items:[
															{
																layout: 'vbox',
																cls: 'assm-field-group',
																items: [
																	{
																		xtype: 'checkboxfield',
																		name: 'biometry-q3',
																		cls: 'assm-form-field-check',
																		value: 1,
																		scope: this,
																		listeners: assm.editListeners.checkbox
																	},
																	{
																		html: '<div class="assm-q-opt-label">OCT</div>'
																	}
																]
															},
															{
																layout: 'vbox',
																cls: 'assm-field-group',
																items: [
																	{
																		xtype: 'checkboxfield',
																		name: 'biometry-q3',
																		cls: 'assm-form-field-check',
																		value: 2,
																		scope: this,
																		listeners: assm.editListeners.checkbox
																	},
																	{
																		html: '<div class="assm-q-opt-label">Pentecam</div>'
																	}
																]
															},
															{
																layout: 'vbox',
																cls: 'assm-field-group',
																items: [
																	{
																		xtype: 'checkboxfield',
																		name: 'biometry-q3',
																		cls: 'assm-form-field-check',
																		value: 3,
																		scope: this,
																		listeners: assm.editListeners.checkbox
																	},
																	{
																		html: '<div class="assm-q-opt-label">Topography</div>'
																	}
																]
															},
															{
																layout: 'vbox',
																cls: 'assm-field-group',
																items: [
																	{
																		xtype: 'checkboxfield',
																		name: 'biometry-q3',
																		cls: 'assm-form-field-check',
																		value: 4,
																		scope: this,
																		listeners: assm.editListeners.checkbox
																	},
																	{
																		html: '<div class="assm-q-opt-label">Specular microscopy</div>'
																	}
																]
															},
															{
																layout: 'vbox',
																cls: 'assm-field-group',
																items: [
																	{
																		xtype: 'checkboxfield',
																		name: 'biometry-q3',
																		cls: 'assm-form-field-check',
																		value: 5,
																		scope: this,
																		listeners: assm.editListeners.checkbox
																	},
																	{
																		html: '<div class="assm-q-opt-label">Dry eye evaluation</div>'
																	}
																]
															}
														]
													},
													{
														/* edit comments button */
														hidden: true,
														cls: 'assm-edit-btn',
														name: 'assm-edit-only',
														items: {
															xtype: 'toolbar',
															docked: 'bottom',
															cls: 'aoa-list-search-toolbar',
															items: [
																{xtype: 'spacer'},
																{
																	text: 'Enter Comments',
																	ui: 'normal',
																	align: 'right',
																	cls: 'assm-btn-type-a',
																	handler: function() {
																		/* what's this ? */
																	}
																}
															]								
														}													
													}
												]
											}
										
										]
									}
								]
							},
							/* question 4 */
							{
								cls: 'assm-divider',
								layout: 'hbox',
								items: [
									{
										cls: 'assm-left-panel',
										flex: 1.7,
										layout: 'vbox',
										items:[
											{
												cls: 'assm-qheader',
												html: 'Question 4'
											},
											{
												cls: 'assm-qtext',
												html: 'How often are biometry measurements verified?'											
											}
											
										]
									},
									{
										cls: 'assm-right-panel',
										flex: 2,
										items: [
											{
												layout: 'vbox',
												xtype: 'fieldset',
												name: 'q-fieldset',
												disabled: true,
												items: [
													{
														layout: 'hbox',
														items:[
															{
																layout: 'vbox',
																cls: 'assm-field-group',
																items: [
																	{
																		xtype: 'radiofield',
																		name: 'biometry-q4',
																		cls: 'assm-form-field-radio1',
																		value: 1,
																		scope: this,
																		listeners: assm.editListeners.radiofield
																	},
																	{
																		html: '<div class="assm-q-opt-label">(Inconsistently / N/A)</div>'
																	}
																]
															},
															{
																layout: 'vbox',
																cls: 'assm-field-group',
																items: [
																	{
																		xtype: 'radiofield',
																		name: 'biometry-q4',
																		cls: 'assm-form-field-radio2',
																		value: 2,
																		scope: this,
																		listeners: assm.editListeners.radiofield
																	}
																]
															},
															{
																layout: 'vbox',
																cls: 'assm-field-group',
																items: [
																	{
																		xtype: 'radiofield',
																		name: 'biometry-q4',
																		cls: 'assm-form-field-radio3',
																		value: 3,
																		scope: this,
																		listeners: assm.editListeners.radiofield
																	}
																]
															},
															{
																layout: 'vbox',
																cls: 'assm-field-group',
																items: [
																	{
																		xtype: 'radiofield',
																		name: 'biometry-q4',
																		cls: 'assm-form-field-radio4',
																		value: 4,
																		scope: this,
																		listeners: assm.editListeners.radiofield
																	}
																]
															},
															{
																layout: 'vbox',
																cls: 'assm-field-group',
																items: [
																	{
																		xtype: 'radiofield',
																		name: 'biometry-q4',
																		cls: 'assm-form-field-radio5',
																		value: 5,
																		scope: this,
																		listeners: assm.editListeners.radiofield
																	},
																	{
																		html: '<div class="assm-q-opt-label">(Consistently)</div>'
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
											{html: 'Clinical Success'},
											{html:'Lifestyle Assessment'},
											{html:'Staff Training'},
											{html:'Patient Experience'},
											{html:'Multifocal Recommendation'},
											{html:'Results'}										
										]
									},
									{
										xtype: 'fieldset',
										items: [
											{
												layout: 'hbox',
												defaults: {
													width: '16.6%',
													cls: 'progress-group',
													flex: 1.6,
													layout: 'hbox'
												},
												items: [
													{
														items: [
															{
																cls: 'progress-dot'
															},
															{
																cls: 'progress-dot checked'
															},
															{
																cls: 'progress-dot'
															},
															{
																cls: 'progress-dot'
															},
															{
																cls: 'progress-dot'
															}
														]
													},
													{
														items: [
															{
																cls: 'progress-dot'
															},
															{
																cls: 'progress-dot checked'
															},
															{
																cls: 'progress-dot checked'
															},
															{
																cls: 'progress-dot checked'
															},
															{
																cls: 'progress-dot'
															}
														]
													},
													{
														items: [
															{
																cls: 'progress-dot'
															},
															{
																cls: 'progress-dot'
															},
															{
																cls: 'progress-dot'
															},
															{
																cls: 'progress-dot'
															},
															{
																cls: 'progress-dot'
															}
														]
													},
													{
														items: [
															{
																cls: 'progress-dot'
															},
															{
																cls: 'progress-dot'
															},
															{
																cls: 'progress-dot'
															},
															{
																cls: 'progress-dot'
															},
															{
																cls: 'progress-dot'
															}
														]
													},
													{
														items: [
															{
																cls: 'progress-dot'
															},
															{
																cls: 'progress-dot'
															},
															{
																cls: 'progress-dot'
															},
															{
																cls: 'progress-dot'
															},
															{
																cls: 'progress-dot'
															}
														]
													},
													{														
														items: [
															{
																cls: 'progress-dot'
															},
															{
																cls: 'progress-dot'
															},
															{
																cls: 'progress-dot'
															},
															{
																cls: 'progress-dot'
															},
															{
																cls: 'progress-dot'
															}
														]
													}													
												]
											},
											{
												xtype: 'sliderfield',
												name: 'assm-progress',
												value: 60,
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


