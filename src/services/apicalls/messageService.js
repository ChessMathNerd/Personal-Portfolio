const MessageService = {
    post_message: async function(name, phone, email, company, position, method, specify, comments) {
        await fetch("https://eu-west-1.aws.data.mongodb-api.com/app/portfolio-gttzq/endpoint/messages/post", {
				method: 'POST',
				headers: {"Content-Type" : "application/json"},
				body: JSON.stringify({
					"name": name, 
					"phone": phone,
                    "email": email,
                    "company": company,
                    "position": position,
                    "method": method,
                    "specify": specify,
                    "comments": comments
			    })
		})
        return "success";
    }
}

export default MessageService;