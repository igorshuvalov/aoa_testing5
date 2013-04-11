Ext.define('aoatheme.view.qset.lrq3', {
    extend: 'Ext.Container',
    xtype: 'lrq3',	
    id: 'lrq3',	

    config: {
        title: 'lrq3',
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
										name: 'lrq3',
										cls: 'assm-form-field-check',
										value: 1,
										scope: this,
										listeners: assm.editListeners.checkbox
									},
									{
										html: '<div class="assm-q-opt-label">Targeted handout</div>'
									}
								]
							},
							{
								layout: 'vbox',
								cls: 'assm-field-group',
								items: [
									{
										xtype: 'checkboxfield',
										name: 'lrq3',
										cls: 'assm-form-field-check',
										value: 2,
										scope: this,
										listeners: assm.editListeners.checkbox
									},
									{
										html: '<div class="assm-q-opt-label">Videos</div>'
									}
								]
							},
							{
								layout: 'vbox',
								cls: 'assm-field-group',
								items: [
									{
										xtype: 'checkboxfield',
										name: 'lrq3',
										cls: 'assm-form-field-check',
										value: 3,
										scope: this,
										listeners: assm.editListeners.checkbox
									},
									{
										html: '<div class="assm-q-opt-label">Patient testimonials and data</div>'
									}
								]
							},
							{
								layout: 'vbox',
								cls: 'assm-field-group',
								items: [
									{
										xtype: 'checkboxfield',
										name: 'lrq3',
										cls: 'assm-form-field-check',
										value: 4,
										scope: this,
										listeners: assm.editListeners.checkbox
									},
									{
										html: '<div class="assm-q-opt-label">Vision simulation</div>'
									}
								]
							},
							{
								layout: 'vbox',
								cls: 'assm-field-group',
								items: [
									{
										xtype: 'checkboxfield',
										name: 'lrq3',
										cls: 'assm-form-field-check',
										value: 5,
										scope: this,
										listeners: assm.editListeners.checkbox
									},
									{
										html: '<div class="assm-q-opt-label">Website portal</div>'
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
									id: 'lrq3-notes-add',
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
									id: 'lrq3-notes-edit',
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