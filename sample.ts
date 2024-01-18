interface DialogflowCXWebhookResponse {
    fulfillment_response: {
        messages: Array<{
            text: {
                text: string[];
            };
        }>;
    };
    sessionInfo?: {
        parameters?: Record<string, any>;
    };
}

const createWebhookResponse = (): DialogflowCXWebhookResponse => {
    return {
        fulfillment_response: {
            messages: [{
                text: {
                    text: ["Hello from the webhook! Here's a response."]
                }
            }]
        },
        sessionInfo: {
            parameters: {
                sampleParameter: "Sample Value"
            }
        }
    };
};

import express from 'express';

const app = express();
app.use(express.json());

app.post('/webhook', (req, res) => {
    const response = createWebhookResponse();
    res.json(response);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
