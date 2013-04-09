Ext.define('aoatheme.view.modals.welcome', {
    extend: 'Ext.Panel',
    xtype: 'welcome',
	id:'welcome-modal',
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
		height: 250,
		width: 350,
		styleHtmlContent: true,										
		html: '<p>Use this application to assess multifocal potential within a clinic after observing 1-2 days of practices, from initial consultation to post-op evaluation.</p>',
		items: [
			{
				docked: 'top',
				xtype: 'toolbar',
				title: 'Welcome',
				cls: 'aoa-modal-toolbar'
			},
			{
				docked: 'bottom',
				xtype: 'toolbar',
				cls: 'aoa-modal-toolbar',
				items: [
					{
						xtype: 'spacer'
					},
					{   
						scope: this,
						cls: 'aoa-modal-btn1',
						ui: 'small',
						text: 'Get Started',
						handler: function() {
							Ext.getCmp('welcome-modal').hide();
						}
					}
				]
			}												
		],
		scrollable: null
    }
});