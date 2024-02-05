Certainly! Below is an example structure for a database in Strapi for managing customer requests for a quote on a manufacturing company website:

1. **Request a Quote Content Type:**

    - **QuoteRequest:**
        - `request_id` (Auto-incrementing ID, Primary Key)
        - `customer_name` (String, required)
        - `company_name` (String)
        - `email` (String, required)
        - `phone` (String)
        - `product_name` (String, required)
        - `quantity` (Integer, required)
        - `additional_details` (Text, additional information about the request)
        - `status` (String or Enum, e.g., Pending, In Progress, Completed)
        - `created_at` (Date, Auto-generated)
        - `updated_at` (Date, Auto-generated)

2. **Users Content Type:**

    - **User:**
        - `user_id` (Auto-incrementing ID, Primary Key)
        - `username` (String, required)
        - `password` (String, required)
        - `email` (String, required)
        - `user_type` (String or Enum, e.g., Customer, Sales Admin)
        - `created_at` (Date, Auto-generated)
        - `updated_at` (Date, Auto-generated)

This structure allows you to manage customer requests for quotes, including details such as customer name, company name, contact information, product name, requested quantity, additional details, and status of the quote request.

Adjust the structure based on your specific requirements. If you need to associate quotes with specific products, you might consider adding additional content types or relationships.

After defining these content types in Strapi, you can use the Strapi admin panel to create and manage customer quote requests on your manufacturing company's website.