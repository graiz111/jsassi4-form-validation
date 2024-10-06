$("#loginForm").validate({
        rules: {
            name: {
                required: true,
                minlength: 3,
                maxlength: 50,
            },
            email: {
                required: true,
                email: true 
            },
            phone: {
                required: true,
                digits: true ,
                minlength: 10,
                maxlength: 14
            },
            age: {
                required: true,
                min: 18, 
                max: 120
            },
            gender: {
                required: true,
                minlength: 4,
                maxlength: 15
            },
            address: {
                required: false,
                maxlength: 50
            },
            city: {
                required: false,
                maxlength: 50
            },
            state: {
                required: false ,
                maxlength: 50
            },
            zip: {
                required: false, 
                digits: true 
            },
            country: {
                required: false ,
                maxlength: 50
            }
        
        
            
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Your name must be at least 3 characters long",
                maxlength: "Your name must be at most 50 characters long"
            },
            email: {
                required: "Please enter your email",
                email: "Please enter a valid email address"
            },
            phone: {
                required: "Please enter your phone number",
                digits: "Please enter only digits",
                minlength: "Your phone number must be at least 10 numbers long",
                maxlength: "Your phone number must be at most 14 numbers long"
            },
            age: {
                required: "Please enter your age",
                min: "Age must be above 18",
                max:"Age must be below 120"
            },
            gender: {
                required: "Please select your gender",
                minlength: "Your gender must be at least 4 characters long",
                maxlength: "Your gender must be at most 15 characters long"
            },
            address: {
                
                 maxlength: "Your address must be at most 50 characters long"
            },
            city: {
                 maxlength: "Your city must be at most 50 characters long"
            },
            state: {
                 maxlength: "Your state must be at most 50 characters long"
            },
            zip: {
                required: "Please enter your ZIP code",
                digits: "Please enter only digits"
            },
            country: {
                maxlength: "Your country must be at most 50 characters long"
            }
        },
        submitHandler: function(form) {
            // Optionally, handle the form submission here
            console.log("Form submitted!");
            form.submit(); // Submit the form
        }
    });

