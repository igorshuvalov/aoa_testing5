Ext.define('aoatheme.view.qset.psq1', {
    extend: 'Ext.Container',
    xtype: 'psq1',
    id: 'psq1',

    config: {
        title: 'psq1',
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
										name: 'psq1',
										cls: 'assm-form-field-check',
										value: 1,
										scope: this,
										listeners: assm.editListeners.checkbox
									},
									{
										html: '<div class="assm-q-opt-label">Lifestyle questionnaire</div>'
									}
								]
							},
							{
								layout: 'vbox',
								cls: 'assm-field-group',
								items: [
									{
										xtype: 'checkboxfield',
										name: 'psq1',
										cls: 'assm-form-field-check',
										value: 2,
										scope: this,
										listeners: assm.editListeners.checkbox
									},
									{
										html: '<div class="assm-q-opt-label">Patient personality/adaptability analysis</div>'
									}
								]
							},
							{
								layout: 'vbox',
								cls: 'assm-field-group',
								items: [
									{
										xtype: 'checkboxfield',
										name: 'psq1',
										cls: 'assm-form-field-check',
										value: 3,
										scope: this,
										listeners: assm.editListeners.checkbox
									},
									{
										html: '<div class="assm-q-opt-label">Medical history</div>'
									}
								]
							},
							{
								layout: 'vbox',
								cls: 'assm-field-group',
								items: [
									{
										xtype: 'checkboxfield',
										name: 'psq1',
										cls: 'assm-form-field-check',
										value: 4,
										scope: this,
										listeners: assm.editListeners.checkbox
									},
									{
										html: '<div class="assm-q-opt-label">Analysis of pre-existing pathology</div>'
									}
								]
							},
							{
								layout: 'vbox',
								cls: 'assm-field-group',
								items: [
									{
										xtype: 'checkboxfield',
										name: 'psq1',
										cls: 'assm-form-field-check',
										value: 5,
										scope: this,
										listeners: assm.editListeners.checkbox
									},
									{
										html: '<div class="assm-q-opt-label">Consideration of patient financial limitations</div>'
									}
								]
							}
						]
					},
					{
						/* add/edit comments button */
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
									id: 'psq1-notes-add',
									hidden: true,
									ui: 'normal',
									align: 'right',
									cls: 'assm-btn-type-a',
									handler: function() {
										/* what's this ? */
									}
								},
								{
									text: 'Edit Comments',
									id: 'psq1-notes-edit',
									hidden: true,
									ui: 'normal',
									align: 'right',
									cls: 'assm-btn-type-b',
									handler: function() {																		
										Ext.getCmp('main').setActiveItem(2)
									}
								}
							]								
						}													
					}
				]
			}
		
		]
    }
});