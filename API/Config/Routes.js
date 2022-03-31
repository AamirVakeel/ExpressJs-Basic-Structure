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
    },
    "/testQuery": {
        controller: "TestQuery",
        allowedMethod: ['GET'],
        auth: false
    },
    "/testFb": {
        controller: "FirebaseTest",
        allowedMethod: ['GET'],
        auth: false
    },
}