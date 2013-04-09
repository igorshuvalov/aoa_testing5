Ext.define('aoatheme.view.modals.feedback', {
    extend: 'Ext.Panel',
    xtype: 'feedback',
	id:'feedback-modal',
    config: {
		modal: true,
		cls: 'aoa-modal-bg',
		hideOnMaskTap: false,
		showAnimation: {
			type: 'popIn',
			duration: 250,
			easing: 'ease-out'
		},
		hideAnimation: {
			type: 'popOut',
			duration: 250,
			easing: 'ease-out'
		},
		centered: true,
		height: 350,
		width: 450,
		styleHtmlContent: true,										
		items: [
			{
				docked: 'top',
				xtype: 'toolbar',
				title: 'Submit Feedback',
				cls: 'aoa-modal-toolbar'
			},
			{
				height: '100%',
				cls: 'fdb-fieldset',
				layout: 'vbox',
				items: [
					{
						cls: 'aoa-fdb-stars',
						html: '* * * * *',
						flex: .3
					},
					{
						cls: 'aoa-fdb-stars',
						html: 'Tap a star to rate',
						flex: .5
					},
					{
						flex: 2.3,
						xtype: 'textareafield',
						name: 'feedback',
						maxRows: 8,
						cls: 'aoa-right-panel-textarea',
						placeHolder: 'Review (Optional)'
					}
				]
			},
			{
				docked: 'bottom',
				xtype: 'toolbar',
				cls: 'aoa-modal-toolbar',
				items: [
					{   
						scope: this,
						cls: 'aoa-modal-btn1',
						ui: 'small',
						text: 'Cancel',
						handler: function() {
							aoa.modals.feedback.hide();
						}
					},
					{
						xtype: 'spacer'
					},
					{   
						scope: this,
						cls: 'aoa-modal-btn1',
						ui: 'small',
						text: 'Ok',
						handler: function() {
							aoa.modals.feedback.hide();
						}
					}
				]
			}												
		],
		scrollable: null
    }
});