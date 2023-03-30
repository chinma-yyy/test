**Trigger Event**
----
  Action to Trigger an Event

* **URL**

    REST API URL can be found on Apps Page <br />
    (Sample image)
  <img width="960" alt="image" src="https://user-images.githubusercontent.com/112387862/228836402-3b5934a6-5549-4b5f-838d-a99821fa4053.png">

    Sample Url for eg: <br /> `http://localhost:3000/api/apps/public/783d8e4d-b06a-409a-aaf3-b37650dc0a26/incoming`

* **Method:**

  `POST`
  
*  **Input Data Format**

    `JSON`

* **Data Params**

  **Required:**
 
   1. `action` = `trigger-event`  <br/>
 
   2. `sessionId=[string]`
      > Note. Session Id is the same session of Botpress. Also note that, session Id is the same as Room Id on Rocket.Chat. 

   3. ```bash
        actionData: {
            event: {
                "name": string,
                "parameters": {
                    object
                },
                languageCode: string
            }
        }
   
        ```
      


* **Sample Payload:**

    ```javascript
        {
            action: "response",
            sessionId: "uGM3uDZkAjtiBb4MA",
            actionData: {
                event: {
                    message: "A response message from bot",
                    languageCode: "en"
                }
            }
        }
    ```


* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ result: "Your request was processed successfully" }`
 
* **Error Response:**

  * **Code:** 400 BAD REQUEST <br />
    **Content:** <br/>
    `{
        error: "Error: Session Id not present in request"
    }`

  OR

  * **Code:** 500 Internal Server Error <br />
    **Content:** <br />
    `{ error : "Error occurred while processing perform-handover. Details:- [Error Details]" }`

* **Sample Call:**

    **Curl**
    ```bash
      curl "http://localhost:3000/api/apps/public/21b7d3ba-031b-41d9-8ff2-fbbfa081ae90/incoming" \
        -X POST \
        -d "{\n  \"action\": \"trigger-event\",\n  \"sessionId\": \"uGM3uDZkAjtiBb4MA\",\n  \"actionData\": {\n    \"event\": {\n      \"name\": \"Welcome\",\n      \"parameters\": {\n        \"name\": \"Sam\"\n      },\n      \"languageCode\": \"en\"\n    }\n  }\n}" \
        -H "Content-Type: application/json" 
    ```
    **HTTP**

  ```HTTP
    POST /api/apps/public/21b7d3ba-031b-41d9-8ff2-fbbfa081ae90/webhook HTTP/1.1
    Host: localhost:3000
    Content-Type: application/json

    {
        "action": "trigger-event",
        "sessionId": "uGM3uDZkAjtiBb4MA",
        "actionData": {
            "event": {
                "message": "A response message from bot"
                "languageCode": "en"
            }
        }
    }
  ```
