    const env = {
        databaseServerConfig: {
            host: "localhost",
            port: 3306,
            user: "root",
            password: "rootpass",
        },
        databaseName: 'test_database',
        serverConfig: {
            port: 3001,
            corsConfig: {
                origin: 'http://localhost:3000'
            }
        }
    }

    export { env }