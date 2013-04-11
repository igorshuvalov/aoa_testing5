Ext.define('aoatheme.view.qset.poq1', {
    extend: 'Ext.Container',
    xtype: 'poq1',
    id: 'poq1',

    config: {
        title: 'poq1',
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
										name: 'poq1',
										cls: 'assm-form-field-check',
										value: 1,
										scope: this,
										listeners: assm.editListeners.checkbox
									},
									{
										html: '<div class="assm-q-opt-label">Not assessed</div>'
									}
								]
							},
							{
								layout: 'vbox',
								cls: 'assm-field-group',
								items: [
									{
										xtype: 'checkboxfield',
										name: 'poq1',
										cls: 'assm-form-field-check',
										value: 2,
										scope: this,
										listeners: assm.editListeners.checkbox
									},
									{
										html: '<div class="assm-q-opt-label">Patient-prompted documentation</div>'
									}
								]
							},
							{
								layout: 'vbox',
								cls: 'assm-field-group',
								items: [
									{
										xtype: 'checkboxfield',
										name: 'poq1',
										cls: 'assm-form-field-check',
										value: 3,
										scope: this,
										listeners: assm.editListeners.checkbox
									},
									{
										html: '<div class="assm-q-opt-label">Proactive duscussion and documentation</div>'
									}
								]
							},
							{
								layout: 'vbox',
								cls: 'assm-field-group',
								items: [
									{
										xtype: 'checkboxfield',
										name: 'poq1',
										cls: 'assm-form-field-check',
										value: 4,
										scope: this,
										listeners: assm.editListeners.checkbox
									},
									{
										html: '<div class="assm-q-opt-label">Post-operative survey</div>'
									}
								]
							},
							{
								layout: 'vbox',
								cls: 'assm-field-group',
								items: [
									{
										xtype: 'checkboxfield',
										name: 'poq1',
										cls: 'assm-form-field-check',
										value: 5,
										scope: this,
										listeners: assm.editListeners.checkbox
									},
									{
										html: '<div class="assm-q-opt-label">Quantitative outcome / satisfaction data analysis</div>'
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
									id: 'poq1-notes-add',
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
									id: 'poq1-notes-edit',
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