define({ "api": [
  {
    "type": "get",
    "url": "api/assets/select/:id",
    "title": "Get VOAsset",
    "version": "0.0.1",
    "name": "GetAsset",
    "group": "Assets",
    "description": "<p>Response asset from DB by id.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>id in BD</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\":  1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {\n         \"id\": 1,\n         \"original_name\": \"face.png\",\n         \"path\": \"/clientAssets/uploads/userImages/_1468357328476_face.png\",\n         \"thumb\": \"/clientAssets/uploads/thumbnails/_1468357328476_face.png\",\n         \"size\": 132545,\n         \"width\": 350,\n         \"height\": 350,\n         \"mime\": \"image/png\",\n         \"orientation\": null,\n         \"active\": null,\n         \"orig_duration\": null\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errno\": 1\n  \"code\": \"SQLITE_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/assets/manager.ts",
    "groupTitle": "Assets",
    "sampleRequest": [
      {
        "url": "/api/assets/select/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/assets/select-all",
    "title": "Get All Assets",
    "version": "0.0.1",
    "name": "GetAssets",
    "group": "Assets",
    "description": "<p>Response all assets from DB.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": [\n       {\n          \"id\": 1,\n          \"original_name\": \"face.png\",\n          \"path\": \"/clientAssets/uploads/userImages/_1468357328476_face.png\",\n          \"thumb\": \"/clientAssets/uploads/thumbnails/_1468357328476_face.png\",\n          \"size\": 132545,\n          \"width\": 350,\n          \"height\": 350,\n          \"mime\": \"image/png\",\n          \"orientation\": null,\n          \"active\": null,\n          \"orig_duration\": null\n       },\n       {\n           \"id\": 2,\n           \"original_name\": \"face.png\",\n           \"path\": \"/clientAssets/uploads/userImages/_1468359521555_face.png\",\n           \"thumb\": \"/clientAssets/uploads/thumbnails/_1468359521555_face.png\",\n           \"size\": 132545,\n           \"width\": 350,\n           \"height\": 350,\n           \"mime\": \"image/png\",\n           \"orientation\": null,\n           \"active\": null,\n           \"orig_duration\": null\n       }\n    ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errno\": 1\n  \"code\": \"SQLITE_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/assets/manager.ts",
    "groupTitle": "Assets",
    "sampleRequest": [
      {
        "url": "/api/assets/select-all"
      }
    ]
  },
  {
    "type": "post",
    "url": "api/assets/upload",
    "title": "Upload Image",
    "version": "0.0.1",
    "name": "UploadImage",
    "group": "Assets",
    "description": "<p>Upload Image and create thumbnail.</p>",
    "parameter": {
      "examples": [
        {
          "title": "Request-Example:",
          "content": "<form name      =  \"uploadForm\"\n      id        =  \"uploadForm\"\n      enctype   =  \"multipart/form-data\"\n      action    =  \"/api/assets/upload\"\n      method    =  \"POST\"\n>\n    <input type=\"file\" name=\"userImages\" />\n    <input type=\"submit\" value=\"Upload Image\" name=\"submit\">\n</form>",
          "type": "html"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\ndata {\n     insertId: 5,\n     thumbPath: '/clientAssets/uploads/thumbnails/_1468011297776_face.png',\n     imagePath: '/clientAssets/uploads/userImages/_1468011297776_face.png'\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"errno\": 1\n  \"code\": \"SQLITE_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/assets/manager.ts",
    "groupTitle": "Assets",
    "sampleRequest": [
      {
        "url": "/api/assets/upload"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/messages/select/:id",
    "title": "Get Message",
    "version": "0.0.1",
    "name": "GetMessage",
    "group": "Messages",
    "description": "<p>Response message from DB by id.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>id in BD</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\":  1\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {\n        \"id\": 1,\n        \"activ\": \"true\",\n        \"message\": \"some text\"\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errno\": 1\n  \"code\": \"SQLITE_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/message/manager.ts",
    "groupTitle": "Messages",
    "sampleRequest": [
      {
        "url": "/api/messages/select/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/messages/select/all",
    "title": "Get All Messages",
    "version": "0.0.1",
    "name": "GetMessages",
    "group": "Messages",
    "description": "<p>Response all messages from DB.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": [\n        {\n            \"id\": 1,\n            \"activ\": 1,\n            \"message\": \"some text\"\n        },\n        {\n            \"id\": 2,\n            \"activ\": 0,\n            \"message\": \"some text\"\n        }\n    ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errno\": 1\n  \"code\": \"SQLITE_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/message/manager.ts",
    "groupTitle": "Messages",
    "sampleRequest": [
      {
        "url": "/api/messages/select/all"
      }
    ]
  },
  {
    "type": "post",
    "url": "api/messages/insert",
    "title": "Insert Message",
    "version": "0.0.1",
    "name": "InsertMessages",
    "group": "Messages",
    "description": "<p>Insert messages in DB.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "active",
            "description": "<p>true or false.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message text</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"active\":  \"true\",\n  \"message\": \"some text\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"activ\": \"true\"\n  \"message\": \"some text\"\n  \"id\": 1\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"errno\": 1\n  \"code\": \"SQLITE_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/message/manager.ts",
    "groupTitle": "Messages",
    "sampleRequest": [
      {
        "url": "/api/messages/insert"
      }
    ]
  },
  {
    "type": "post",
    "url": "api/messages/update",
    "title": "Update Message",
    "version": "0.0.1",
    "name": "UpdateMessage",
    "group": "Messages",
    "description": "<p>Update messages in DB.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>id in BD</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "active",
            "description": "<p>true or false.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message text</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\":      1\n  \"active\":  true,\n  \"message\": \"some text\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"data\": {\n    \"changes\": 1\n  }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"errno\": 1\n  \"code\": \"SQLITE_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/message/manager.ts",
    "groupTitle": "Messages",
    "sampleRequest": [
      {
        "url": "/api/messages/update"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/playlists/delete-playlist-byid/:id",
    "title": "Delete Playlist ById",
    "version": "0.0.1",
    "name": "DeletePlaylistById",
    "group": "Playlists",
    "description": "<p>Delete Playlist ById.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "Id",
            "description": "<p>required parameter (prime).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\":2,\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n     \"data\": {\n         \"changes\": 2\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\": \"error\",\n  \"reason\": {\n     \"changes\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/playlists/manager.ts",
    "groupTitle": "Playlists",
    "sampleRequest": [
      {
        "url": "/api/playlists/delete-playlist-byid/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/playlists/delete-playlist-item-byid/:id",
    "title": "Delete Playlist Item By Id",
    "version": "0.0.1",
    "name": "DeletePlaylistItemById",
    "group": "Playlists",
    "description": "<p>Delete Playlist(fields of playlist) in DB.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>required parameter (prime).</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\":28\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n     \"data\": {\n         \"changes\": 1\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\": \"error\",\n  \"reason\": {\n     \"changes\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/playlists/manager.ts",
    "groupTitle": "Playlists",
    "sampleRequest": [
      {
        "url": "/api/playlists/delete-playlist-item-byid/:id"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/playlists/all",
    "title": "Get All Playlists Items",
    "version": "0.0.1",
    "name": "GetPlaylistsItems",
    "group": "Playlists",
    "description": "<p>Response all playlists items are grouped by playlists.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": [\n        {\n            \"list\": {\n                \"id\": 1,\n                \"name_pl\": null,\n                \"description\": null,\n                \"size\": null,\n                \"time_from\": null,\n                \"time_to\": null,\n                \"created_user\": null,\n                \"created_time\": null,\n                \"duration\": null,\n                \"active\": null,\n                \"dimension\": null\n            },\n            \"item\": [\n                {\n                    \"id\": 1,\n                    \"playlist_id\": 1,\n                    \"asset_id\": 84,\n                    \"duration\": 0,\n                    \"after_id\": 0,\n                    \"type\": \"img\",\n                    \"position\": null,\n                    \"asset\": {\n                        \"id\": 84,\n                        \"original_name\": \"1922.jpg\",\n                        \"path\": \"/clientAssets/uploads/userImages/_1468553585376_1922.jpg\",\n                        \"thumb\": \"/clientAssets/uploads/thumbnails/_1468553585376_1922.jpg\",\n                        \"size\": 98484,\n                        \"width\": 422,\n                        \"height\": 512,\n                        \"mime\": \"image/jpeg\",\n                        \"orig_dimension\": null,\n                        \"active\": null,\n                        \"duration\": null,\n                        \"type\": null,\n                        \"time_from\": null,\n                        \"time_to\": null,\n                        \"created_user\": null,\n                        \"created_time\": null\n                    }\n                },\n        ................\n\n     ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errno\": 1\n  \"code\": \"SQLITE_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/playlists/manager.ts",
    "groupTitle": "Playlists",
    "sampleRequest": [
      {
        "url": "/api/playlists/all"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/playlists/byid/:id",
    "title": "Get Playlist By Id",
    "version": "0.0.1",
    "name": "Get_Playlist_By_Id",
    "group": "Playlists",
    "description": "<p>Response playlist item from DB by ListId.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "number",
            "optional": false,
            "field": "id",
            "description": "<p>listid in BD</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\":  2\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {\n        \"playlist\": {\n           \"id\": 3,\n           \"name_pl\": \"some name\",\n           \"description\": \"some description\",\n           \"size\": 6574894,\n           \"time_from\": 0,\n           \"time_to\": 25,\n           \"created_user\": 1,\n           \"created_time\": 21,\n           \"duration\": 25,\n           \"active\": 1,\n           \"dimension\": \"landscape\"\n        },\n        \"items\": [\n            {\n                \"id\": 6,\n                \"original_name\": \"1922.jpg\",\n                \"path\": \"/clientAssets/uploads/userImages/_1468553585376_1922.jpg\",\n                \"thumb\": \"/clientAssets/uploads/thumbnails/_1468553585376_1922.jpg\",\n                \"size\": 98484,\n                \"width\": 422,\n                \"height\": 512,\n                \"mime\": \"image/jpeg\",\n                \"orig_dimension\": null,\n                \"active\": null,\n                \"duration\": 10,\n                \"type\": \"img\",\n                \"time_from\": null,\n                \"time_to\": null,\n                \"created_user\": null,\n                \"created_time\": null,\n                \"playlist_id\": 3,\n                \"asset_id\": 84,\n                \"after_id\": 0,\n                \"dimension\": null\n            },\n            {\n                \"id\": 7,\n                \"original_name\": \"1920.jpg\",\n                \"path\": \"/clientAssets/uploads/userImages/_1468553585370_1920.jpg\",\n                \"thumb\": \"/clientAssets/uploads/thumbnails/_1468553585370_1920.jpg\",\n                \"size\": 171987,\n                \"width\": 720,\n                \"height\": 506,\n                \"mime\": \"image/jpeg\",\n                \"orig_dimension\": null,\n                \"active\": null,\n                \"duration\": 10,\n                \"type\": \"img\",\n                \"time_from\": null,\n                \"time_to\": null,\n                \"created_user\": null,\n                \"created_time\": null,\n                \"playlist_id\": 3,\n                \"asset_id\": 85,\n                \"after_id\": 6,\n                \"dimension\": null\n            }\n        ]\n    }\n}",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errno\": 1\n  \"code\": \"SQLITE_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/playlists/manager.ts",
    "groupTitle": "Playlists",
    "sampleRequest": [
      {
        "url": "/api/playlists/byid/:id"
      }
    ]
  },
  {
    "type": "post",
    "url": "api/playlists/insert-playlist-item",
    "title": "Insert Playlist Item",
    "version": "0.0.1",
    "name": "InsertPlaylistItem",
    "group": "Playlists",
    "description": "<p>Insert Content into playlist in position where after_id previous content id. Return all inserted fields of playlists + full assets.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "list_id",
            "description": "<p>required parameter and must be &gt; 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "asset_id",
            "description": "<p>required parameter and must be &gt; 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "after_id",
            "description": "<p>required parameter and must be !&lt; 0.</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>optional</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"playlist_id\":7,\n  \"asset_id\": 3,\n  \"after_id\":6\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n   \"data\": [\n     {\n       \"id\": 30,\n       \"original_name\": \"face.png\",\n       \"path\": \"/clientAssets/uploads/userImages/_1468363584469_face.png\",\n       \"thumb\": \"/clientAssets/uploads/thumbnails/_1468363584469_face.png\",\n       \"size\": 132545,\n       \"width\": 350,\n       \"height\": 350,\n       \"mime\": \"image/png\",\n       \"orientation\": null,\n       \"active\": null,\n       \"orig_duration\": null,\n       \"playlist_id\": 7,\n       \"asset_id\": 3,\n       \"duration\": null,\n       \"after_id\": 6\n     }\n   ]\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"errno\": 1\n  \"code\": \"SQLITE_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/playlists/manager.ts",
    "groupTitle": "Playlists",
    "sampleRequest": [
      {
        "url": "/api/playlists/insert-playlist-item"
      }
    ]
  },
  {
    "type": "get",
    "url": "api/playlists/create-playlist",
    "title": "Create New Playlist",
    "version": "0.0.1",
    "name": "NewPlaylist",
    "group": "Playlists",
    "description": "<p>Create New Playlist ID in DB.</p>",
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "{\n    \"data\": {\n            \"playlistId\": 11\n        }\n }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "HTTP/1.1 200 OK\n{\n  \"errno\": 1\n  \"code\": \"SQLITE_ERROR\"\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/playlists/manager.ts",
    "groupTitle": "Playlists",
    "sampleRequest": [
      {
        "url": "/api/playlists/create-playlist"
      }
    ]
  },
  {
    "type": "post",
    "url": "api/playlists/update-playlist",
    "title": "Update Playlist",
    "version": "0.0.1",
    "name": "UpdatePlaylist",
    "group": "Playlists",
    "description": "<p>Update Playlist (fields of playlist) in DB.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>required parameter (prime).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>optional</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n    \"id\": 3,\n    \"name_pl\": \"some name\",\n    \"description\": \"some description\",\n    \"size\": 6574894,\n    \"time_from\": 0,\n    \"time_to\": 25,\n    \"created_user\": 1,\n    \"created_time\": 21,\n    \"duration\": 25,\n    \"active\": 1,\n    \"dimension\": \"landscape\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n     \"data\": {\n         \"changes\": 1\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\": \"error\",\n  \"reason\": {\n     \"changes\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/playlists/manager.ts",
    "groupTitle": "Playlists",
    "sampleRequest": [
      {
        "url": "/api/playlists/update-playlist"
      }
    ]
  },
  {
    "type": "post",
    "url": "api/playlists/update-playlist-item",
    "title": "Update Playlist Item",
    "version": "0.0.1",
    "name": "UpdatePlaylistItem",
    "group": "Playlists",
    "description": "<p>Update Playlist item(fields of playlist) in DB.</p>",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "id",
            "description": "<p>required parameter (prime).</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "after_id",
            "description": "<p>optional</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "duration",
            "description": "<p>optional</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example:",
          "content": "{\n  \"id\":28,\n  \"duration\":20,\n  \"after_id\":6\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "Success-Response:",
          "content": "HTTP/1.1 200 OK\n  {\n     \"data\": {\n         \"changes\": 1\n     }\n  }",
          "type": "json"
        }
      ]
    },
    "error": {
      "examples": [
        {
          "title": "Error-Response:",
          "content": "{\n  \"error\": \"error\",\n  \"reason\": {\n     \"changes\": 0\n  }\n}",
          "type": "json"
        }
      ]
    },
    "filename": "server/playlists/manager.ts",
    "groupTitle": "Playlists",
    "sampleRequest": [
      {
        "url": "/api/playlists/update-playlist-item"
      }
    ]
  }
] });
