Ext.define('aoatheme.view.qset.peq3', {
    extend: 'Ext.Container',
    xtype: 'peq3',
    id: 'peq3',

    config: {
        title: 'peq3',
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
										name: 'peq3',
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
										name: 'peq3',
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
										name: 'peq3',
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
										name: 'peq3',
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
										name: 'peq3',
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
});