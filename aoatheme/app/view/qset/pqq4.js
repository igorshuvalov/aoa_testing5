Ext.define('aoatheme.view.qset.pqq4', {
    extend: 'Ext.Container',
    xtype: 'pqq4',
    id: 'pqq4',

    config: {
        title: 'pqq4',
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
										xtype: 'radiofield',
										name: 'pqq4',
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
										name: 'pqq4',
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
										name: 'pqq4',
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
										name: 'pqq4',
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
										name: 'pqq4',
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
});