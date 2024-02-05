Certainly! Below is an example structure for a manufacturing company events database in Strapi:

1. **Manufacturing Company Events Content Type:**

    - **Event:**
        - `event_id` (Auto-incrementing ID, Primary Key)
        - `event_name` (String, required)
        - `event_date` (Date, required)
        - `location` (String)
        - `description` (Text, required)
        - `image_url` (String, URL to the event image)
        - `created_at` (Date, Auto-generated)
        - `updated_at` (Date, Auto-generated)

    - **Attendee:**
        - `attendee_id` (Auto-incrementing ID, Primary Key)
        - `event` (Relation to Event content type, required)
        - `user` (Relation to User content type, required)
        - `registration_date` (Date, Auto-generated)
        - `status` (String or Enum, e.g., Registered, Attended, Canceled)

2. **Users Content Type:**

    - **User:**
        - `user_id` (Auto-incrementing ID, Primary Key)
        - `username` (String, required)
        - `password` (String, required)
        - `email` (String, required)
        - `user_type` (String or Enum, e.g., Attendee, Organizer, Admin)
        - `created_at` (Date, Auto-generated)
        - `updated_at` (Date, Auto-generated)

This structure allows you to manage manufacturing company events, including details such as event name, date, location, description, and image. The `Attendee` content type enables you to track users who have registered for events, their registration status, and registration date.

Adjust the structure based on your specific requirements. You may want to add more fields to capture additional details about events or attendees. After defining these content types in Strapi, you can use the Strapi admin panel to create and manage your manufacturing company events.