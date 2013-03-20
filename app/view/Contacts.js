Ext.define('testing.view.Contacts', {
    extend: 'Ext.List',
    xtype: 'contacts',

    config: {
        title: 'Address Book',
        cls: 'x-contacts',
        store: 'Contacts',
		height: 500,
        grouped: true,
        indexBar: true,
        itemTpl: [
            '<div class="headshot" style="background-image:url(resources/images/headshots/{headshot});"></div>',
            '{firstName} {lastName}'
        ].join('')
    }
});
