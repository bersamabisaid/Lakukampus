const AUTH_LOCALSTORAGE_KEYNAME = 'authorization token';

const AuthToken = {
    type: 'Bearer',

    get driver() {
        return 'localStorage';
    },

    get tokenStorageKeyName() {
        return AUTH_LOCALSTORAGE_KEYNAME;
    },

    get tokenStorageValue() {
        return JSON.parse(window.localStorage.getItem(this.tokenStorageKeyName));
    },
    set tokenStorageValue(v) {
        const stored = JSON.stringify(v);
        window.localStorage.setItem(this.tokenStorageKeyName, stored);
    },

    get accessToken() {
        return this.tokenStorageValue?.access_token ?? undefined;
    },

    get isExpired() {
        const expires = new Date(this.tokenStorageValue?.expires_at ?? null);
        const now = new Date(Date.now());
        return now > expires;
    },

    get isAvailable() {
        return this.accessToken ? true : !this.isExpired;
    },

    get toHeader() {
        return this.isAvailable ? `${this.type} ${this.accessToken}` : undefined;
    },

};

export default AuthToken;
