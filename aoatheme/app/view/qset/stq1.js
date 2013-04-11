Ext.define('aoatheme.view.qset.stq1', {
    extend: 'Ext.Container',
    xtype: 'stq1',
    id: 'stq1',

    config: {
        title: 'stq1',
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
										name: 'stq1',
										cls: 'assm-form-field-check',
										value: 1,
										scope: this,
										listeners: assm.editListeners.checkbox
									},
									{
										html: '<div class="assm-q-opt-label">Brochures</div>'
									}
								]
							},
							{
								layout: 'vbox',
								cls: 'assm-field-group',
								items: [
									{
										xtype: 'checkboxfield',
										name: 'stq1',
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
										name: 'stq1',
										cls: 'assm-form-field-check',
										value: 3,
										scope: this,
										listeners: assm.editListeners.checkbox
									},
									{
										html: '<div class="assm-q-opt-label">Posters</div>'
									}
								]
							},
							{
								layout: 'vbox',
								cls: 'assm-field-group',
								items: [
									{
										xtype: 'checkboxfield',
										name: 'stq1',
										cls: 'assm-form-field-check',
										value: 4,
										scope: this,
										listeners: assm.editListeners.checkbox
									},
									{
										html: '<div class="assm-q-opt-label">Sales representative seminar</div>'
									}
								]
							},
							{
								layout: 'vbox',
								cls: 'assm-field-group',
								items: [
									{
										xtype: 'checkboxfield',
										name: 'stq1',
										cls: 'assm-form-field-check',
										value: 5,
										scope: this,
										listeners: assm.editListeners.checkbox
									},
									{
										html: '<div class="assm-q-opt-label">Formal online training</div>'
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
									id: 'stq1-notes-add',
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
									id: 'stq1-notes-edit',
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