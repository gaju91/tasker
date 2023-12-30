{
	"info": {
		"_postman_id": "40ca2ce4-5b86-422e-9420-f7a069b925f5",
		"name": "Tasker",
		"description": "# Tasker API Documentation\n\n## Version: CURRENT\n\n---\n\n## Authentication\n\n- **Endpoint:** `POST /auth/login`\n    \n\n## User Management\n\n- **Endpoint:** `POST | GET /user` **Admin Only**\n    \n- **Endpoint:** `GET /user/:_id` **Admin Only**\n    \n- **Endpoint:** `GET /user/profile` **Allow For Both**\n    \n- **Endpoint:**",
		"schema": "https://schema.getpostman.com/json/collection/v2.1.0/collection.json",
		"_exporter_id": "28300123",
		"_collection_link": "https://launchpad-ventures.postman.co/workspace/Glow-With-Sarah~940cd6c4-984b-4181-8cd4-690d0947c893/collection/28300123-40ca2ce4-5b86-422e-9420-f7a069b925f5?action=share&source=collection_link&creator=28300123"
	},
	"item": [
		{
			"name": "Authentication",
			"item": [
				{
					"name": "Login",
					"request": {
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"password\": \"gaju92@1234\",\n    \"email\": \"gaju92@gmail.com\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3000/auth/login",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"auth",
								"login"
							]
						}
					},
					"response": [
						{
							"name": "Admin User - Success",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"email\": \"admin@test.com\",\n    \"password\": \"admin123\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:3000/auth/login",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"auth",
										"login"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "314"
								},
								{
									"key": "ETag",
									"value": "W/\"13a-r7WxCMo+iM9IrCKuDJei/dRUb9U\""
								},
								{
									"key": "Date",
									"value": "Fri, 29 Dec 2023 11:27:56 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"statusCode\": 201,\n    \"status\": \"success\",\n    \"data\": {\n        \"access_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwic3ViIjoiNjU4ZWEyNTViMzE3ZmJmYjQzMzdhZWQyIiwidHlwZSI6ImFkbWluIiwiaWF0IjoxNzAzODQ5Mjc2LCJleHAiOjE3MDM4ODUyNzZ9.1Xa5ZCQG8CdJt2hbH-l3FxIs9XsX2Jui1HY-YDk2QGE\"\n    },\n    \"message\": \"Operation successful\"\n}"
						},
						{
							"name": "Default User - Success",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"password\": \"gaju92@1234\",\n    \"email\": \"gaju92@gmail.com\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:3000/auth/login",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"auth",
										"login"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "318"
								},
								{
									"key": "ETag",
									"value": "W/\"13e-qfe/FLsPpoUNFNjp+YpKx3qlPRw\""
								},
								{
									"key": "Date",
									"value": "Fri, 29 Dec 2023 14:18:28 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"statusCode\": 201,\n    \"status\": \"success\",\n    \"data\": {\n        \"access_token\": \"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImdhanU5MiIsInN1YiI6IjY1OGViYWY0YTI5OTc1ZDVkMjU2MTk0YSIsInR5cGUiOiJkZWZhdWx0IiwiaWF0IjoxNzAzODU5NTA4LCJleHAiOjE3MDM4OTU1MDh9.OHroBF4qBc5wesjvmlfeH42P9t3O3_leBZD1ApKYT7M\"\n    },\n    \"message\": \"Operation successful\"\n}"
						},
						{
							"name": "Invalid Creds",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"email\": \"admin@test.com\",\n    \"password\": \"admn123\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:3000/auth/login",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"auth",
										"login"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "73"
								},
								{
									"key": "ETag",
									"value": "W/\"49-Fx+yDPXfDSYD3nxIxyU6P47CVX0\""
								},
								{
									"key": "Date",
									"value": "Fri, 29 Dec 2023 11:30:54 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Invalid credentials\",\n    \"error\": \"Unauthorized\",\n    \"statusCode\": 401\n}"
						}
					]
				}
			]
		},
		{
			"name": "User Management",
			"item": [
				{
					"name": "Create User",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{admin_user}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"username\": \"gaju94\",\n    \"password\": \"gaju94@1234\",\n    \"email\": \"gaju94@gmail.com\",\n    \"type\": \"default\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3000/user/",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"user",
								""
							]
						}
					},
					"response": [
						{
							"name": "Unauthorized",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"username\": \"gaju91\",\n    \"password\": \"gaju@1234\",\n    \"email\": \"gaju91@gmail.com\",\n    \"type\": \"default\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:3000/user/",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"user",
										""
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "43"
								},
								{
									"key": "ETag",
									"value": "W/\"2b-dGnJzt6gv1nJjX6DJ9RztDWptng\""
								},
								{
									"key": "Date",
									"value": "Fri, 29 Dec 2023 12:22:16 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Unauthorized\",\n    \"statusCode\": 401\n}"
						},
						{
							"name": "Validation Error",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"username\": \"gaju91\",\n    \"password\": \"gaju@1234\",\n    \"type\": \"default\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:3000/user/",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"user",
										""
									]
								}
							},
							"status": "Bad Request",
							"code": 400,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "77"
								},
								{
									"key": "ETag",
									"value": "W/\"4d-3V3Uy1KR57m8txxwRQ1zEUNG0HY\""
								},
								{
									"key": "Date",
									"value": "Fri, 29 Dec 2023 12:10:14 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": [\n        \"email must be an email\"\n    ],\n    \"error\": \"Bad Request\",\n    \"statusCode\": 400\n}"
						},
						{
							"name": "User Already Exist",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"username\": \"gaju93\",\n    \"password\": \"gaju93@1234\",\n    \"email\": \"gaju93@gmail.com\",\n    \"type\": \"default\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:3000/user/",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"user",
										""
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "90"
								},
								{
									"key": "ETag",
									"value": "W/\"5a-v7zhHWLZufgsNfISSI8TBOcTwKU\""
								},
								{
									"key": "Date",
									"value": "Fri, 29 Dec 2023 12:25:28 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"User already already exists\",\n    \"error\": \"Internal Server Error\",\n    \"statusCode\": 500\n}"
						},
						{
							"name": "Success",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"username\": \"gaju91\",\n    \"password\": \"gaju@1234\",\n    \"email\": \"gaju91@gmail.com\",\n    \"type\": \"default\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:3000/user/",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"user",
										""
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "184"
								},
								{
									"key": "ETag",
									"value": "W/\"b8-l9uuYqTzRNdUWpuZsIstsA7w60o\""
								},
								{
									"key": "Date",
									"value": "Fri, 29 Dec 2023 12:01:54 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"statusCode\": 201,\n    \"status\": \"success\",\n    \"data\": {\n        \"_id\": \"658eb532abf09839dad25e84\",\n        \"username\": \"gaju91\",\n        \"email\": \"gaju91@gmail.com\",\n        \"type\": \"default\",\n        \"__v\": 0\n    },\n    \"message\": \"Operation successful\"\n}"
						}
					]
				},
				{
					"name": "Update User",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{default_user}}",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": " {\n    \"username\": \"gaju94_Updated\",\n    \"email\": \"gaju94+1@gmail.com\",\n    \"type\": \"default\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3000/user/658edaf4afc0cafca4c4e532",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"user",
								"658edaf4afc0cafca4c4e532"
							]
						}
					},
					"response": [
						{
							"name": "Admin User - Success",
							"originalRequest": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": " {\n    \"username\": \"gaju94_Updated\",\n    \"email\": \"gaju94+1@gmail.com\",\n    \"type\": \"default\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:3000/user/658edaf4afc0cafca4c4e532",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"user",
										"658edaf4afc0cafca4c4e532"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "194"
								},
								{
									"key": "ETag",
									"value": "W/\"c2-BGqK1TVeGdrTm4H3N2Qm9O+Fj8o\""
								},
								{
									"key": "Date",
									"value": "Fri, 29 Dec 2023 14:45:45 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"statusCode\": 200,\n    \"status\": \"success\",\n    \"data\": {\n        \"_id\": \"658edaf4afc0cafca4c4e532\",\n        \"username\": \"gaju94_Updated\",\n        \"email\": \"gaju94+1@gmail.com\",\n        \"type\": \"default\",\n        \"__v\": 0\n    },\n    \"message\": \"Operation successful\"\n}"
						},
						{
							"name": "Default User - Forbidden",
							"originalRequest": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": " {\n    \"username\": \"gaju94_Updated\",\n    \"email\": \"gaju94+1@gmail.com\",\n    \"type\": \"default\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:3000/user/658edaf4afc0cafca4c4e532",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"user",
										"658edaf4afc0cafca4c4e532"
									]
								}
							},
							"status": "Forbidden",
							"code": 403,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "69"
								},
								{
									"key": "ETag",
									"value": "W/\"45-MZJWZc+Y+RUbHpnhz2B2Vipii24\""
								},
								{
									"key": "Date",
									"value": "Fri, 29 Dec 2023 14:47:02 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Forbidden resource\",\n    \"error\": \"Forbidden\",\n    \"statusCode\": 403\n}"
						}
					]
				},
				{
					"name": "Delete User",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{admin_user}}",
									"type": "string"
								}
							]
						},
						"method": "DELETE",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:3000/user/658edaf4afc0cafca4c4e532",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"user",
								"658edaf4afc0cafca4c4e532"
							]
						}
					},
					"response": [
						{
							"name": "Default User - Forbidden",
							"originalRequest": {
								"method": "DELETE",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:3000/user/658edaf4afc0cafca4c4e532",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"user",
										"658edaf4afc0cafca4c4e532"
									]
								}
							},
							"status": "Forbidden",
							"code": 403,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "69"
								},
								{
									"key": "ETag",
									"value": "W/\"45-MZJWZc+Y+RUbHpnhz2B2Vipii24\""
								},
								{
									"key": "Date",
									"value": "Fri, 29 Dec 2023 14:49:41 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Forbidden resource\",\n    \"error\": \"Forbidden\",\n    \"statusCode\": 403\n}"
						},
						{
							"name": "Admin User - Successful",
							"originalRequest": {
								"method": "DELETE",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:3000/user/658edaf4afc0cafca4c4e532",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"user",
										"658edaf4afc0cafca4c4e532"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "80"
								},
								{
									"key": "ETag",
									"value": "W/\"50-jbN9DR4BDFV72v4bBP36OTlWJnA\""
								},
								{
									"key": "Date",
									"value": "Fri, 29 Dec 2023 14:50:20 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"statusCode\": 200,\n    \"status\": \"success\",\n    \"data\": {},\n    \"message\": \"Operation successful\"\n}"
						},
						{
							"name": "User Not Found",
							"originalRequest": {
								"method": "DELETE",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:3000/user/658edaf4afc0cafca4c4e532",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"user",
										"658edaf4afc0cafca4c4e532"
									]
								}
							},
							"status": "Internal Server Error",
							"code": 500,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "77"
								},
								{
									"key": "ETag",
									"value": "W/\"4d-bNtmUApAQE9p8Vw0qxzfBzXEfb4\""
								},
								{
									"key": "Date",
									"value": "Fri, 29 Dec 2023 14:50:50 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"User not found\",\n    \"error\": \"Internal Server Error\",\n    \"statusCode\": 500\n}"
						}
					]
				},
				{
					"name": "Get Users",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{admin_user}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "localhost:4000/user",
							"host": [
								"localhost"
							],
							"port": "4000",
							"path": [
								"user"
							],
							"query": [
								{
									"key": "email",
									"value": "admin@test.com",
									"disabled": true
								},
								{
									"key": "username",
									"value": "gaju92@gmail.com",
									"disabled": true
								},
								{
									"key": "type",
									"value": "default",
									"disabled": true
								},
								{
									"key": "limit",
									"value": "2",
									"disabled": true
								},
								{
									"key": "offset",
									"value": "0",
									"disabled": true
								}
							]
						}
					},
					"response": [
						{
							"name": "Full List",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:3000/user",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"user"
									],
									"query": [
										{
											"key": "email",
											"value": "admin@test.com",
											"disabled": true
										},
										{
											"key": "username",
											"value": "gaju92@gmail.com",
											"disabled": true
										},
										{
											"key": "type",
											"value": "default",
											"disabled": true
										},
										{
											"key": "limit",
											"value": "10",
											"disabled": true
										},
										{
											"key": "offset",
											"value": "0",
											"disabled": true
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "395"
								},
								{
									"key": "ETag",
									"value": "W/\"18b-jnj6px9LEkFwF8/x07OtzC21O3k\""
								},
								{
									"key": "Date",
									"value": "Fri, 29 Dec 2023 13:59:54 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"statusCode\": 200,\n    \"status\": \"success\",\n    \"data\": [\n        {\n            \"_id\": \"658ea255b317fbfb4337aed2\",\n            \"username\": \"admin\",\n            \"email\": \"admin@test.com\",\n            \"type\": \"admin\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"658ebaf4a29975d5d256194a\",\n            \"username\": \"gaju92\",\n            \"email\": \"gaju92@gmail.com\",\n            \"type\": \"default\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"658ebb1aa29975d5d256194e\",\n            \"username\": \"gaju93\",\n            \"email\": \"gaju93@gmail.com\",\n            \"type\": \"default\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"Operation successful\"\n}"
						},
						{
							"name": "List By Type",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:3000/user?type=default",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"user"
									],
									"query": [
										{
											"key": "email",
											"value": "admin@test.com",
											"disabled": true
										},
										{
											"key": "username",
											"value": "gaju92@gmail.com",
											"disabled": true
										},
										{
											"key": "type",
											"value": "default"
										},
										{
											"key": "limit",
											"value": "10",
											"disabled": true
										},
										{
											"key": "offset",
											"value": "0",
											"disabled": true
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "293"
								},
								{
									"key": "ETag",
									"value": "W/\"125-6t4N9fpmmpuWfSRcjNDZfJJcLtY\""
								},
								{
									"key": "Date",
									"value": "Fri, 29 Dec 2023 14:00:31 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"statusCode\": 200,\n    \"status\": \"success\",\n    \"data\": [\n        {\n            \"_id\": \"658ebaf4a29975d5d256194a\",\n            \"username\": \"gaju92\",\n            \"email\": \"gaju92@gmail.com\",\n            \"type\": \"default\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"658ebb1aa29975d5d256194e\",\n            \"username\": \"gaju93\",\n            \"email\": \"gaju93@gmail.com\",\n            \"type\": \"default\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"Operation successful\"\n}"
						},
						{
							"name": "List By Limit Offset",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:3000/user?limit=2&offset=0",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"user"
									],
									"query": [
										{
											"key": "email",
											"value": "admin@test.com",
											"disabled": true
										},
										{
											"key": "username",
											"value": "gaju92@gmail.com",
											"disabled": true
										},
										{
											"key": "type",
											"value": "default",
											"disabled": true
										},
										{
											"key": "limit",
											"value": "2"
										},
										{
											"key": "offset",
											"value": "0"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "288"
								},
								{
									"key": "ETag",
									"value": "W/\"120-ATQijcr/aiM5zuj5h9okXLUYtDw\""
								},
								{
									"key": "Date",
									"value": "Fri, 29 Dec 2023 14:00:49 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"statusCode\": 200,\n    \"status\": \"success\",\n    \"data\": [\n        {\n            \"_id\": \"658ea255b317fbfb4337aed2\",\n            \"username\": \"admin\",\n            \"email\": \"admin@test.com\",\n            \"type\": \"admin\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"658ebaf4a29975d5d256194a\",\n            \"username\": \"gaju92\",\n            \"email\": \"gaju92@gmail.com\",\n            \"type\": \"default\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"Operation successful\"\n}"
						},
						{
							"name": "Default User Forbidden",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:3000/user",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"user"
									],
									"query": [
										{
											"key": "email",
											"value": "admin@test.com",
											"disabled": true
										},
										{
											"key": "username",
											"value": "gaju92@gmail.com",
											"disabled": true
										},
										{
											"key": "type",
											"value": "default",
											"disabled": true
										},
										{
											"key": "limit",
											"value": "2",
											"disabled": true
										},
										{
											"key": "offset",
											"value": "0",
											"disabled": true
										}
									]
								}
							},
							"status": "Forbidden",
							"code": 403,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "69"
								},
								{
									"key": "ETag",
									"value": "W/\"45-MZJWZc+Y+RUbHpnhz2B2Vipii24\""
								},
								{
									"key": "Date",
									"value": "Fri, 29 Dec 2023 14:02:06 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Forbidden resource\",\n    \"error\": \"Forbidden\",\n    \"statusCode\": 403\n}"
						}
					]
				},
				{
					"name": "Get My User",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{default_user}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "localhost:3000/user/profile",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"user",
								"profile"
							],
							"query": [
								{
									"key": "email",
									"value": "admin@test.com",
									"disabled": true
								},
								{
									"key": "username",
									"value": "gaju92@gmail.com",
									"disabled": true
								},
								{
									"key": "type",
									"value": "default",
									"disabled": true
								},
								{
									"key": "limit",
									"value": "2",
									"disabled": true
								},
								{
									"key": "offset",
									"value": "0",
									"disabled": true
								}
							]
						}
					},
					"response": [
						{
							"name": "Default User - Success",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:3000/user/profile",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"user",
										"profile"
									],
									"query": [
										{
											"key": "email",
											"value": "admin@test.com",
											"disabled": true
										},
										{
											"key": "username",
											"value": "gaju92@gmail.com",
											"disabled": true
										},
										{
											"key": "type",
											"value": "default",
											"disabled": true
										},
										{
											"key": "limit",
											"value": "2",
											"disabled": true
										},
										{
											"key": "offset",
											"value": "0",
											"disabled": true
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "184"
								},
								{
									"key": "ETag",
									"value": "W/\"b8-00AjRzo74+be9050+ejfnWJ/0vc\""
								},
								{
									"key": "Date",
									"value": "Fri, 29 Dec 2023 14:20:10 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"statusCode\": 200,\n    \"status\": \"success\",\n    \"data\": {\n        \"_id\": \"658ebaf4a29975d5d256194a\",\n        \"username\": \"gaju92\",\n        \"email\": \"gaju92@gmail.com\",\n        \"type\": \"default\",\n        \"__v\": 0\n    },\n    \"message\": \"Operation successful\"\n}"
						},
						{
							"name": "Admin User - Success",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:3000/user/profile",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"user",
										"profile"
									],
									"query": [
										{
											"key": "email",
											"value": "admin@test.com",
											"disabled": true
										},
										{
											"key": "username",
											"value": "gaju92@gmail.com",
											"disabled": true
										},
										{
											"key": "type",
											"value": "default",
											"disabled": true
										},
										{
											"key": "limit",
											"value": "2",
											"disabled": true
										},
										{
											"key": "offset",
											"value": "0",
											"disabled": true
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "179"
								},
								{
									"key": "ETag",
									"value": "W/\"b3-H7SF1U4QgQuDWJtw/iMmn25vQcQ\""
								},
								{
									"key": "Date",
									"value": "Fri, 29 Dec 2023 14:20:51 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"statusCode\": 200,\n    \"status\": \"success\",\n    \"data\": {\n        \"_id\": \"658ea255b317fbfb4337aed2\",\n        \"username\": \"admin\",\n        \"email\": \"admin@test.com\",\n        \"type\": \"admin\",\n        \"__v\": 0\n    },\n    \"message\": \"Operation successful\"\n}"
						},
						{
							"name": "Un Authorized",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:3000/user/profile",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"user",
										"profile"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "43"
								},
								{
									"key": "ETag",
									"value": "W/\"2b-dGnJzt6gv1nJjX6DJ9RztDWptng\""
								},
								{
									"key": "Date",
									"value": "Fri, 29 Dec 2023 14:12:01 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Unauthorized\",\n    \"statusCode\": 401\n}"
						}
					]
				},
				{
					"name": "Get Any User",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImFkbWluIiwic3ViIjoiNjU4ZWEyNTViMzE3ZmJmYjQzMzdhZWQyIiwidHlwZSI6ImFkbWluIiwiaWF0IjoxNzAzODQ5Mjc2LCJleHAiOjE3MDM4ODUyNzZ9.1Xa5ZCQG8CdJt2hbH-l3FxIs9XsX2Jui1HY-YDk2QGE",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"url": {
							"raw": "localhost:3000/user/658ebaf4a29975d5d256194a",
							"host": [
								"localhost"
							],
							"port": "3000",
							"path": [
								"user",
								"658ebaf4a29975d5d256194a"
							]
						}
					},
					"response": [
						{
							"name": "Admin - Success",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"url": {
									"raw": "localhost:3000/user/658ebaf4a29975d5d256194a",
									"host": [
										"localhost"
									],
									"port": "3000",
									"path": [
										"user",
										"658ebaf4a29975d5d256194a"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "184"
								},
								{
									"key": "ETag",
									"value": "W/\"b8-00AjRzo74+be9050+ejfnWJ/0vc\""
								},
								{
									"key": "Date",
									"value": "Fri, 29 Dec 2023 14:14:29 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"statusCode\": 200,\n    \"status\": \"success\",\n    \"data\": {\n        \"_id\": \"658ebaf4a29975d5d256194a\",\n        \"username\": \"gaju92\",\n        \"email\": \"gaju92@gmail.com\",\n        \"type\": \"default\",\n        \"__v\": 0\n    },\n    \"message\": \"Operation successful\"\n}"
						}
					]
				}
			],
			"description": "- **Admin should be able to add/delete users.**\n    \n- **Default users should be able to fetch their own information only.**"
		},
		{
			"name": "Task Managment",
			"item": [
				{
					"name": "Create Task",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{default_user}}",
									"type": "string"
								}
							]
						},
						"method": "POST",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"user\": \"658fc0ec4afedcd012de540c\",\n    \"title\": \"Task 2 for gaju93\",\n    \"description\": \"Complete the assignment\",\n    \"priority\": \"high\",\n    \"dueDate\": \"2023-12-31\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:4000/task",
							"host": [
								"localhost"
							],
							"port": "4000",
							"path": [
								"task"
							]
						}
					},
					"response": [
						{
							"name": "Admin User - Success",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"user\": \"658fc0dc4afedcd012de5408\",\n    \"title\": \"Task for gaju91\",\n    \"description\": \"Complete the assignment\",\n    \"priority\": \"medium\",\n    \"dueDate\": \"2023-12-30\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:4000/task",
									"host": [
										"localhost"
									],
									"port": "4000",
									"path": [
										"task"
									]
								}
							},
							"status": "Created",
							"code": 201,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "389"
								},
								{
									"key": "ETag",
									"value": "W/\"185-ccsA3nFHnmgR9VrZCr7e3Gk8GfQ\""
								},
								{
									"key": "Date",
									"value": "Sat, 30 Dec 2023 07:09:10 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"statusCode\": 201,\n    \"status\": \"success\",\n    \"data\": {\n        \"_id\": \"658fc216df6fde722eae697f\",\n        \"user\": \"658fc0dc4afedcd012de5408\",\n        \"title\": \"Task for gaju91\",\n        \"description\": \"Complete the assignment\",\n        \"status\": \"TODO\",\n        \"priority\": \"medium\",\n        \"dueDate\": \"2023-12-30T00:00:00.000Z\",\n        \"completed\": false,\n        \"createdAt\": \"2023-12-30T07:09:10.960Z\",\n        \"updatedAt\": \"2023-12-30T07:09:10.960Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Operation successful\"\n}"
						},
						{
							"name": "Default User - Forbidden",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"user\": \"658fc0ec4afedcd012de540c\",\n    \"title\": \"Task 2 for gaju93\",\n    \"description\": \"Complete the assignment\",\n    \"priority\": \"high\",\n    \"dueDate\": \"2023-12-31\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:4000/task",
									"host": [
										"localhost"
									],
									"port": "4000",
									"path": [
										"task"
									]
								}
							},
							"status": "Forbidden",
							"code": 403,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "69"
								},
								{
									"key": "ETag",
									"value": "W/\"45-MZJWZc+Y+RUbHpnhz2B2Vipii24\""
								},
								{
									"key": "Date",
									"value": "Sat, 30 Dec 2023 07:13:43 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Forbidden resource\",\n    \"error\": \"Forbidden\",\n    \"statusCode\": 403\n}"
						},
						{
							"name": "Validation Error",
							"originalRequest": {
								"method": "POST",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:4000/task",
									"host": [
										"localhost"
									],
									"port": "4000",
									"path": [
										"task"
									]
								}
							},
							"status": "Bad Request",
							"code": 400,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "236"
								},
								{
									"key": "ETag",
									"value": "W/\"ec-VhykJMH22EA8haxHMcrOLBsFAZs\""
								},
								{
									"key": "Date",
									"value": "Sat, 30 Dec 2023 07:03:25 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": [\n        \"user must be a mongodb id\",\n        \"title must be a string\",\n        \"description must be a string\",\n        \"priority must be one of the following values: high, medium, low\",\n        \"dueDate must be a Date instance\"\n    ],\n    \"error\": \"Bad Request\",\n    \"statusCode\": 400\n}"
						}
					]
				},
				{
					"name": "Update Task",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{admin_user}}",
									"type": "string"
								}
							]
						},
						"method": "PUT",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"user\": \"658fc0ec4afedcd012de540c\",\n    \"title\": \"Task Update 2 for gaju93\",\n    \"description\": \"Complete the assignment 2\",\n    \"priority\": \"low1\",\n    \"dueDate\": \"2023-01-02\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:4000/task/658fc216df6fde722eae697f",
							"host": [
								"localhost"
							],
							"port": "4000",
							"path": [
								"task",
								"658fc216df6fde722eae697f"
							]
						}
					},
					"response": [
						{
							"name": "Admin User - Success",
							"originalRequest": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"user\": \"658fc0ec4afedcd012de540c\",\n    \"title\": \"Task Update 2 for gaju93\",\n    \"description\": \"Complete the assignment 2\",\n    \"priority\": \"low\",\n    \"dueDate\": \"2023-01-02\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:4000/task/658fc216df6fde722eae697f",
									"host": [
										"localhost"
									],
									"port": "4000",
									"path": [
										"task",
										"658fc216df6fde722eae697f"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "397"
								},
								{
									"key": "ETag",
									"value": "W/\"18d-ZBvPsCCQoHPsDMsnPeMzNGLYd3Y\""
								},
								{
									"key": "Date",
									"value": "Sat, 30 Dec 2023 07:58:07 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"statusCode\": 200,\n    \"status\": \"success\",\n    \"data\": {\n        \"_id\": \"658fc216df6fde722eae697f\",\n        \"user\": \"658fc0ec4afedcd012de540c\",\n        \"title\": \"Task Update 2 for gaju93\",\n        \"description\": \"Complete the assignment 2\",\n        \"status\": \"TODO\",\n        \"priority\": \"low\",\n        \"dueDate\": \"2023-01-02T00:00:00.000Z\",\n        \"completed\": false,\n        \"createdAt\": \"2023-12-30T07:09:10.960Z\",\n        \"updatedAt\": \"2023-12-30T07:58:07.694Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Operation successful\"\n}"
						},
						{
							"name": "Default User - Forbidden",
							"originalRequest": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"user\": \"658fc0ec4afedcd012de540c\",\n    \"title\": \"Task Update 2 for gaju93\",\n    \"description\": \"Complete the assignment 2\",\n    \"priority\": \"low\",\n    \"dueDate\": \"2023-01-02\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:4000/task/658fc216df6fde722eae697f",
									"host": [
										"localhost"
									],
									"port": "4000",
									"path": [
										"task",
										"658fc216df6fde722eae697f"
									]
								}
							},
							"status": "Forbidden",
							"code": 403,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "69"
								},
								{
									"key": "ETag",
									"value": "W/\"45-MZJWZc+Y+RUbHpnhz2B2Vipii24\""
								},
								{
									"key": "Date",
									"value": "Sat, 30 Dec 2023 07:59:05 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"Forbidden resource\",\n    \"error\": \"Forbidden\",\n    \"statusCode\": 403\n}"
						},
						{
							"name": "Validation Error",
							"originalRequest": {
								"method": "PUT",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "{\n    \"user\": \"658fc0ec4afedcd012de540c\",\n    \"title\": \"Task Update 2 for gaju93\",\n    \"description\": \"Complete the assignment 2\",\n    \"priority\": \"low1\",\n    \"dueDate\": \"2023-01-02\"\n}",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:4000/task/658fc216df6fde722eae697f",
									"host": [
										"localhost"
									],
									"port": "4000",
									"path": [
										"task",
										"658fc216df6fde722eae697f"
									]
								}
							},
							"status": "Bad Request",
							"code": 400,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "118"
								},
								{
									"key": "ETag",
									"value": "W/\"76-6i8Vv3EPf7h4PFYSiM1pz1w8YT4\""
								},
								{
									"key": "Date",
									"value": "Sat, 30 Dec 2023 07:59:42 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": [\n        \"priority must be one of the following values: high, medium, low\"\n    ],\n    \"error\": \"Bad Request\",\n    \"statusCode\": 400\n}"
						}
					]
				},
				{
					"name": "Start Task",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{default_user}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "{\n    \"user\": \"658fc0ec4afedcd012de540c\",\n    \"title\": \"Task Update 2 for gaju93\",\n    \"description\": \"Complete the assignment 2\",\n    \"priority\": \"low1\",\n    \"dueDate\": \"2023-01-02\"\n}",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:4000/task/658fc25cdf6fde722eae6988/start",
							"host": [
								"localhost"
							],
							"port": "4000",
							"path": [
								"task",
								"658fc25cdf6fde722eae6988",
								"start"
							]
						}
					},
					"response": [
						{
							"name": "Admin User - Success",
							"originalRequest": {
								"method": "PATCH",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:4000/task/658fc230df6fde722eae6982/start",
									"host": [
										"localhost"
									],
									"port": "4000",
									"path": [
										"task",
										"658fc230df6fde722eae6982",
										"start"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "395"
								},
								{
									"key": "ETag",
									"value": "W/\"18b-aSDolVxQiu3By2WrHm5uW57Icys\""
								},
								{
									"key": "Date",
									"value": "Sat, 30 Dec 2023 08:12:53 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"statusCode\": 200,\n    \"status\": \"success\",\n    \"data\": {\n        \"_id\": \"658fc230df6fde722eae6982\",\n        \"user\": \"658fc0dc4afedcd012de5408\",\n        \"title\": \"Task 2 for gaju91\",\n        \"description\": \"Complete the assignment\",\n        \"status\": \"IN_PROGRESS\",\n        \"priority\": \"low\",\n        \"dueDate\": \"2023-12-30T00:00:00.000Z\",\n        \"completed\": false,\n        \"createdAt\": \"2023-12-30T07:09:36.268Z\",\n        \"updatedAt\": \"2023-12-30T08:12:53.088Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Operation successful\"\n}"
						},
						{
							"name": "Default User - Success",
							"originalRequest": {
								"method": "PATCH",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:4000/task/658fc230df6fde722eae6982/start",
									"host": [
										"localhost"
									],
									"port": "4000",
									"path": [
										"task",
										"658fc230df6fde722eae6982",
										"start"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "395"
								},
								{
									"key": "ETag",
									"value": "W/\"18b-92a6ITeJkw9HIZjE9Jph6fh7Igw\""
								},
								{
									"key": "Date",
									"value": "Sat, 30 Dec 2023 08:13:23 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"statusCode\": 200,\n    \"status\": \"success\",\n    \"data\": {\n        \"_id\": \"658fc230df6fde722eae6982\",\n        \"user\": \"658fc0dc4afedcd012de5408\",\n        \"title\": \"Task 2 for gaju91\",\n        \"description\": \"Complete the assignment\",\n        \"status\": \"IN_PROGRESS\",\n        \"priority\": \"low\",\n        \"dueDate\": \"2023-12-30T00:00:00.000Z\",\n        \"completed\": false,\n        \"createdAt\": \"2023-12-30T07:09:36.268Z\",\n        \"updatedAt\": \"2023-12-30T08:13:23.793Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Operation successful\"\n}"
						},
						{
							"name": "Other User - Forbidden",
							"originalRequest": {
								"method": "PATCH",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:4000/task/658fc25cdf6fde722eae6988/start",
									"host": [
										"localhost"
									],
									"port": "4000",
									"path": [
										"task",
										"658fc25cdf6fde722eae6988",
										"start"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "92"
								},
								{
									"key": "ETag",
									"value": "W/\"5c-inRuhSy22d9IFtY0ZLuVRMzSWL4\""
								},
								{
									"key": "Date",
									"value": "Sat, 30 Dec 2023 08:16:03 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"You are not allowed to start this task\",\n    \"error\": \"Unauthorized\",\n    \"statusCode\": 401\n}"
						}
					]
				},
				{
					"name": "Complete Task",
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{admin_user}}",
									"type": "string"
								}
							]
						},
						"method": "PATCH",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:4000/task/658fc230df6fde722eae6982/complete",
							"host": [
								"localhost"
							],
							"port": "4000",
							"path": [
								"task",
								"658fc230df6fde722eae6982",
								"complete"
							]
						}
					},
					"response": [
						{
							"name": "Default User - Success",
							"originalRequest": {
								"method": "PATCH",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:4000/task/658fc230df6fde722eae6982/complete",
									"host": [
										"localhost"
									],
									"port": "4000",
									"path": [
										"task",
										"658fc230df6fde722eae6982",
										"complete"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "388"
								},
								{
									"key": "ETag",
									"value": "W/\"184-Rrc/3TZMNpmjJaWz8I9vwQ52jEQ\""
								},
								{
									"key": "Date",
									"value": "Sat, 30 Dec 2023 08:19:26 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"statusCode\": 200,\n    \"status\": \"success\",\n    \"data\": {\n        \"_id\": \"658fc230df6fde722eae6982\",\n        \"user\": \"658fc0dc4afedcd012de5408\",\n        \"title\": \"Task 2 for gaju91\",\n        \"description\": \"Complete the assignment\",\n        \"status\": \"DONE\",\n        \"priority\": \"low\",\n        \"dueDate\": \"2023-12-30T00:00:00.000Z\",\n        \"completed\": false,\n        \"createdAt\": \"2023-12-30T07:09:36.268Z\",\n        \"updatedAt\": \"2023-12-30T08:19:26.629Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Operation successful\"\n}"
						},
						{
							"name": "Other User - Forbidden",
							"originalRequest": {
								"method": "PATCH",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:4000/task/658fc25cdf6fde722eae6988/complete",
									"host": [
										"localhost"
									],
									"port": "4000",
									"path": [
										"task",
										"658fc25cdf6fde722eae6988",
										"complete"
									]
								}
							},
							"status": "Unauthorized",
							"code": 401,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "95"
								},
								{
									"key": "ETag",
									"value": "W/\"5f-FkuvANKcYMKRzSw6QiN3GAX63tU\""
								},
								{
									"key": "Date",
									"value": "Sat, 30 Dec 2023 08:18:02 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"message\": \"You are not allowed to complete this task\",\n    \"error\": \"Unauthorized\",\n    \"statusCode\": 401\n}"
						},
						{
							"name": "Admin User - Success",
							"originalRequest": {
								"method": "PATCH",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:4000/task/658fc230df6fde722eae6982/complete",
									"host": [
										"localhost"
									],
									"port": "4000",
									"path": [
										"task",
										"658fc230df6fde722eae6982",
										"complete"
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "388"
								},
								{
									"key": "ETag",
									"value": "W/\"184-drfl0xfu2U9QzKwib2d8DsmMg9k\""
								},
								{
									"key": "Date",
									"value": "Sat, 30 Dec 2023 08:19:50 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"statusCode\": 200,\n    \"status\": \"success\",\n    \"data\": {\n        \"_id\": \"658fc230df6fde722eae6982\",\n        \"user\": \"658fc0dc4afedcd012de5408\",\n        \"title\": \"Task 2 for gaju91\",\n        \"description\": \"Complete the assignment\",\n        \"status\": \"DONE\",\n        \"priority\": \"low\",\n        \"dueDate\": \"2023-12-30T00:00:00.000Z\",\n        \"completed\": false,\n        \"createdAt\": \"2023-12-30T07:09:36.268Z\",\n        \"updatedAt\": \"2023-12-30T08:19:50.012Z\",\n        \"__v\": 0\n    },\n    \"message\": \"Operation successful\"\n}"
						}
					]
				},
				{
					"name": "Get Tasks",
					"protocolProfileBehavior": {
						"disableBodyPruning": true
					},
					"request": {
						"auth": {
							"type": "bearer",
							"bearer": [
								{
									"key": "token",
									"value": "{{default_user}}",
									"type": "string"
								}
							]
						},
						"method": "GET",
						"header": [],
						"body": {
							"mode": "raw",
							"raw": "",
							"options": {
								"raw": {
									"language": "json"
								}
							}
						},
						"url": {
							"raw": "localhost:4000/task?priority=low&status=TODO&limit=2&offset=0&sortBy=dueDate&sortDir=desc",
							"host": [
								"localhost"
							],
							"port": "4000",
							"path": [
								"task"
							],
							"query": [
								{
									"key": "priority",
									"value": "low"
								},
								{
									"key": "status",
									"value": "TODO"
								},
								{
									"key": "dueDate",
									"value": "",
									"disabled": true
								},
								{
									"key": "limit",
									"value": "2"
								},
								{
									"key": "offset",
									"value": "0"
								},
								{
									"key": "sortBy",
									"value": "dueDate"
								},
								{
									"key": "sortDir",
									"value": "desc"
								}
							]
						}
					},
					"response": [
						{
							"name": "Admin User - Success",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:4000/task",
									"host": [
										"localhost"
									],
									"port": "4000",
									"path": [
										"task"
									],
									"query": [
										{
											"key": "priority",
											"value": "low",
											"disabled": true
										},
										{
											"key": "status",
											"value": "TODO",
											"disabled": true
										},
										{
											"key": "dueDate",
											"value": null,
											"disabled": true
										},
										{
											"key": "limit",
											"value": "1",
											"disabled": true
										},
										{
											"key": "offset",
											"value": null,
											"disabled": true
										},
										{
											"key": "sortBy",
											"value": "priority",
											"disabled": true
										},
										{
											"key": "sortDir",
											"value": "asc",
											"disabled": true
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "1323"
								},
								{
									"key": "ETag",
									"value": "W/\"52b-a7q4XarV4eAb6XNhf/d9RJ24L84\""
								},
								{
									"key": "Date",
									"value": "Sat, 30 Dec 2023 07:50:44 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"statusCode\": 200,\n    \"status\": \"success\",\n    \"data\": [\n        {\n            \"_id\": \"658fc25cdf6fde722eae6988\",\n            \"user\": \"658fc0ec4afedcd012de540c\",\n            \"title\": \"Task 2 for gaju93\",\n            \"description\": \"Complete the assignment\",\n            \"status\": \"TODO\",\n            \"priority\": \"high\",\n            \"dueDate\": \"2023-12-31T00:00:00.000Z\",\n            \"completed\": false,\n            \"createdAt\": \"2023-12-30T07:10:20.045Z\",\n            \"updatedAt\": \"2023-12-30T07:10:20.045Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"658fc248df6fde722eae6985\",\n            \"user\": \"658fc0ec4afedcd012de540c\",\n            \"title\": \"Task for gaju93\",\n            \"description\": \"Complete the assignment\",\n            \"status\": \"TODO\",\n            \"priority\": \"low\",\n            \"dueDate\": \"2023-12-30T00:00:00.000Z\",\n            \"completed\": false,\n            \"createdAt\": \"2023-12-30T07:10:00.022Z\",\n            \"updatedAt\": \"2023-12-30T07:10:00.022Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"658fc230df6fde722eae6982\",\n            \"user\": \"658fc0dc4afedcd012de5408\",\n            \"title\": \"Task 2 for gaju91\",\n            \"description\": \"Complete the assignment\",\n            \"status\": \"TODO\",\n            \"priority\": \"low\",\n            \"dueDate\": \"2023-12-30T00:00:00.000Z\",\n            \"completed\": false,\n            \"createdAt\": \"2023-12-30T07:09:36.268Z\",\n            \"updatedAt\": \"2023-12-30T07:09:36.268Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"658fc216df6fde722eae697f\",\n            \"user\": \"658fc0dc4afedcd012de5408\",\n            \"title\": \"Task for gaju91\",\n            \"description\": \"Complete the assignment\",\n            \"status\": \"TODO\",\n            \"priority\": \"medium\",\n            \"dueDate\": \"2023-12-30T00:00:00.000Z\",\n            \"completed\": false,\n            \"createdAt\": \"2023-12-30T07:09:10.960Z\",\n            \"updatedAt\": \"2023-12-30T07:09:10.960Z\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"Operation successful\"\n}"
						},
						{
							"name": "Default User - Success",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:4000/task",
									"host": [
										"localhost"
									],
									"port": "4000",
									"path": [
										"task"
									],
									"query": [
										{
											"key": "priority",
											"value": "low",
											"disabled": true
										},
										{
											"key": "status",
											"value": "TODO",
											"disabled": true
										},
										{
											"key": "dueDate",
											"value": null,
											"disabled": true
										},
										{
											"key": "limit",
											"value": "1",
											"disabled": true
										},
										{
											"key": "offset",
											"value": null,
											"disabled": true
										},
										{
											"key": "sortBy",
											"value": "priority",
											"disabled": true
										},
										{
											"key": "sortDir",
											"value": "asc",
											"disabled": true
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "702"
								},
								{
									"key": "ETag",
									"value": "W/\"2be-7ma74QiOrHxIHHQrugDdACf1Xhs\""
								},
								{
									"key": "Date",
									"value": "Sat, 30 Dec 2023 07:51:43 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"statusCode\": 200,\n    \"status\": \"success\",\n    \"data\": [\n        {\n            \"_id\": \"658fc230df6fde722eae6982\",\n            \"user\": \"658fc0dc4afedcd012de5408\",\n            \"title\": \"Task 2 for gaju91\",\n            \"description\": \"Complete the assignment\",\n            \"status\": \"TODO\",\n            \"priority\": \"low\",\n            \"dueDate\": \"2023-12-30T00:00:00.000Z\",\n            \"completed\": false,\n            \"createdAt\": \"2023-12-30T07:09:36.268Z\",\n            \"updatedAt\": \"2023-12-30T07:09:36.268Z\",\n            \"__v\": 0\n        },\n        {\n            \"_id\": \"658fc216df6fde722eae697f\",\n            \"user\": \"658fc0dc4afedcd012de5408\",\n            \"title\": \"Task for gaju91\",\n            \"description\": \"Complete the assignment\",\n            \"status\": \"TODO\",\n            \"priority\": \"medium\",\n            \"dueDate\": \"2023-12-30T00:00:00.000Z\",\n            \"completed\": false,\n            \"createdAt\": \"2023-12-30T07:09:10.960Z\",\n            \"updatedAt\": \"2023-12-30T07:09:10.960Z\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"Operation successful\"\n}"
						},
						{
							"name": "With Params",
							"originalRequest": {
								"method": "GET",
								"header": [],
								"body": {
									"mode": "raw",
									"raw": "",
									"options": {
										"raw": {
											"language": "json"
										}
									}
								},
								"url": {
									"raw": "localhost:4000/task?priority=low&status=TODO&limit=2&offset=0&sortBy=dueDate&sortDir=desc",
									"host": [
										"localhost"
									],
									"port": "4000",
									"path": [
										"task"
									],
									"query": [
										{
											"key": "priority",
											"value": "low"
										},
										{
											"key": "status",
											"value": "TODO"
										},
										{
											"key": "dueDate",
											"value": "",
											"disabled": true
										},
										{
											"key": "limit",
											"value": "2"
										},
										{
											"key": "offset",
											"value": "0"
										},
										{
											"key": "sortBy",
											"value": "dueDate"
										},
										{
											"key": "sortDir",
											"value": "desc"
										}
									]
								}
							},
							"status": "OK",
							"code": 200,
							"_postman_previewlanguage": "json",
							"header": [
								{
									"key": "X-Powered-By",
									"value": "Express"
								},
								{
									"key": "Content-Type",
									"value": "application/json; charset=utf-8"
								},
								{
									"key": "Content-Length",
									"value": "390"
								},
								{
									"key": "ETag",
									"value": "W/\"186-PlNt5Q0PkkE2eFbGryKllntHLi8\""
								},
								{
									"key": "Date",
									"value": "Sat, 30 Dec 2023 07:54:00 GMT"
								},
								{
									"key": "Connection",
									"value": "keep-alive"
								},
								{
									"key": "Keep-Alive",
									"value": "timeout=5"
								}
							],
							"cookie": [],
							"body": "{\n    \"statusCode\": 200,\n    \"status\": \"success\",\n    \"data\": [\n        {\n            \"_id\": \"658fc230df6fde722eae6982\",\n            \"user\": \"658fc0dc4afedcd012de5408\",\n            \"title\": \"Task 2 for gaju91\",\n            \"description\": \"Complete the assignment\",\n            \"status\": \"TODO\",\n            \"priority\": \"low\",\n            \"dueDate\": \"2023-12-30T00:00:00.000Z\",\n            \"completed\": false,\n            \"createdAt\": \"2023-12-30T07:09:36.268Z\",\n            \"updatedAt\": \"2023-12-30T07:09:36.268Z\",\n            \"__v\": 0\n        }\n    ],\n    \"message\": \"Operation successful\"\n}"
						}
					]
				}
			]
		}
	]
}
