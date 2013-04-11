Ext.define('aoatheme.view.qset.iq2', {
    extend: 'Ext.Container',
    xtype: 'iq2',
    id: 'iq2',

    config: {
        title: 'iq2',
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
										name: 'iq2',
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
										name: 'iq2',
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
										name: 'iq2',
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
										name: 'iq2',
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
										name: 'iq2',
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