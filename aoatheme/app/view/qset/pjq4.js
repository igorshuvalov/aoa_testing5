Ext.define('aoatheme.view.qset.pjq4', {
    extend: 'Ext.Container',
    xtype: 'pjq4',
    id: 'pjq4',

    config: {
        title: 'pjq4',
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
										name: 'pjq4',
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
										name: 'pjq4',
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
										name: 'pjq4',
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
										name: 'pjq4',
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
										name: 'pjq4',
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
									id: 'pjq4-notes-add',
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
									id: 'pjq4-notes-edit',
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