const getServerSettings = function (setting) {
    const serverSettings = {
        connectionType: 'global',
    };
    return serverSettings[setting];
}

export {getServerSettings};