Ext.define('testing.model.Contact', {
    extend: 'Ext.data.Model',

    config: {
        fields: [
            'firstName',
            'lastName',
            'email',
            'headshot',
            'title',
            'telephone',
            'city',
            'state',
            'country',
            'latitude',
            'longitude',
            'usertype'
        ]
    }
});
