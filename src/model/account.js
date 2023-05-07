// SPDX-License-Identifier: MIT

import GObject from 'gi://GObject';

/* Object representing an account */
export default class Account extends GObject.Object {

    static {
        GObject.registerClass({
            GTypeName: 'Account',
            Properties: {
                'id': GObject.ParamSpec.string('id', null, null, GObject.ParamFlags.READWRITE, null),
                'forge': GObject.ParamSpec.string('forge', null, null, GObject.ParamFlags.READWRITE, null),
                'url': GObject.ParamSpec.string('url', null, null, GObject.ParamFlags.READWRITE, null),
                'username': GObject.ParamSpec.string('username', null, null, GObject.ParamFlags.READWRITE, null)
            },
        }, this);
    }

    /* Create an Account */
    constructor(constructProperties = {}) {
        super(constructProperties);
    }

    /**
     * Account display name
     * 
     * (username@instance.tld)
     * 
     * @type {String}
     */
    get displayName() {
        return `${this._username}@${this._url}`;
    }

    /**
     * Account ID from app settings
     *
     * @type {String}
     */
    get id() {
        if (this._id === undefined)
            this._id = null;

        return this._id;
    }

    set id(value) {
        if (this._id === value)
            return;

        this._id = value;
        this.notify('id');
    }

    /**
     * Account forge name
     *
     * @type {String}
     */
    get forge() {
        if (this._forge === undefined)
            this._forge = null;

        return this._forge;
    }

    set forge(value) {
        if (this._forge === value)
            return;

        this._forge = value;
        this.notify('forge');
    }

    /**
     * Account server URL
     *
     * @type {String}
     */
    get url() {
        if (this._url === undefined)
            this._url = null;

        return this._url;
    }

    set url(value) {
        if (this._url === value)
            return;

        this._url = value;
        this.notify('url');
    }

    /**
     * Account username
     *
     * @type {String}
     */
    get username() {
        if (this._username === undefined)
            this._username = null;

        return this._username;
    }

    set username(value) {
        if (this._username === value)
            return;

        this._username = value;
        this.notify('username');
    }
};
