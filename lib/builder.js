class MessageBuilder {
    /**
     * This is the class to initialize a new MessageBuilder.
     * @constructor
     */
    constructor() {
        this.data = {
            "attachments": [ { "fields": [] } ]
        };
    }

    /**
     * Set the description of the embed
     *
     * @param {string} description The description to use
     */
    setDescription(description) {
        this.data.attachments[0].text = description;
        return this;
    }

    /**
     * Set the title of the embed
     *
     * @param {string} title The title to use
     */
    setTitle(title) {
        this.data.attachments[0].title = title;
        return this;
    }

    /**
     * This method sets the username of the hook
     *
     * @param {string} username The username to use
     */
    setAuthor(name, url, icon) {
        this.data.attachments[0].author = {
            name: name
        };
        if(url) {
            this.data.attachments[0].author.url = url;
        }
        if(icon) {
            this.data.attachments[0].author.icon_url = icon;
        }
        return this;
    }

    /**
     * This method sets the color of the embed.
     *
     * @param {string} color The hexadecimal color
     */
    setColor(color) {
        this.data.attachments[0].color = color;
        return this;
    }

    /**
     * Set the text to be sent alongside the embed.
     *
     * @param {string} text The text.
     */
    setText(text) {
        this.data.text = text;
        return this;
    }

    /**
     * This method adds a new field to the embed.
     *
     * @param {string} title The title of the field.
     * @param {string} value The value of the field.
     */
    addField(title, value, inline) {
        const fieldObj = {
            "title": title,
            "value": value,
            "inline": inline !== undefined ? inline : false
        };

        this.data.attachments[0].fields.push(fieldObj);
        return this;
    }
    
    /**
     * Remove a field from an embed
     *
     * @param {string} name The name of the field to remove
     */
    removeField(name) {
        this.data.attachments[0].fields = this.data.attachments[0].fields.filter(field => field.title != name);
        
        return this;
    }

    /**
     * Set timestamp, if no argument is passed, the current
     * time is used.
     *
     * @param {number} timestamp The timestamp to use.
     */
    setTime(timestamp) {
        if (!timestamp) {
            timestamp = new Date() / 1000;
        }

        this.data.attachments[0].ts = timestamp;
        return this;
    }

    /**
     * This method adds an image to the embed.
     *
     * @param {string} imageURL The URL to the image.
     */
    setImage(imageURL) {
        this.data.attachments[0].image = {
            url: imageURL
        };
        return this;
    }


    /**
     * This method adds a thumbnail to the embed.
     *
     * @param {string} imageURL The URL to the image.
     */
    setThumbnail(imageURL) {
        this.data.attachments[0].thumbnail = {
            url: imageURL
        };
        return this;
    }
}

module.exports = MessageBuilder;
