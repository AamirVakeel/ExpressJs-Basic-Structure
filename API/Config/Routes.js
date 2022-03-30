module.exports = {
    "/testRoute": {
        controller: "TestRoute",
        allowedMethod: ['GET'],
        auth: false
    },
    "/testFolderRoute": {
        controller: "TestFolder/TestRoute",
        allowedMethod: ['GET'],
        auth: false
    },
    "/testQuery/:id": {
        controller: "TestQuery",
        allowedMethod: ['GET'],
        auth: false
    }
}