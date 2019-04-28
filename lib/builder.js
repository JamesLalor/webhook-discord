class MessageBuilder {
    /**
     * This is the class to initialize a new MessageBuilder.
     * @constructor
     */
    constructor() {
        this.data = {
            "embeds": [ { "fields": [] } ]
        };
    }

    /**
     * Set the description of the embed
     *
     * @param {string} description The description to use
     */
    setDescription(description) {
        this.data.embeds[0].description = description;
        return this;
    }

    /**
     * Set the title of the embed
     *
     * @param {string} title The title to use
     */
    setTitle(title) {
        this.data.embeds[0].title = title;
        return this;
    }

    /**
     * This method sets the username of the hook
     *
     * @param {string} username The username to use
     */
    setUsername(name) {
        this.data.username = name;
        return this;
    }

    /**
     * This method sets the url of the hook
     *
     * @param {string} url The url to use
     */
    setUrl(url) {
        this.data.url = url;
        return this;
    }

    /**
     * This method sets the author of the hook
     *
     * @param {string} name The name to use
     * @param {string} url The URL to use
     * @param {string} icon The icon URL to use
     */
    setAuthor(name, url, icon) {
        this.data.embeds[0].author = {
            name: name
        };
        if(url) {
            this.data.embeds[0].author.url = url;
        }
        if(icon) {
            this.data.embeds[0].author.icon_url = icon;
        }
        return this;
    }

    /**
     * This method sets the color of the embed.
     *
     * @param {string} color The hexadecimal color
     */
    setColor(color) {
        this.data.embeds[0].color = color;
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
     * @param {string} name The name of the field.
     * @param {string} value The value of the field.
     * @param {bool} inline Whether to inline the field.
     */
    addField(name, value, inline) {
        const fieldObj = {
            "name": name,
            "value": value,
            "inline": inline !== undefined ? inline : false
        };

        this.data.embeds[0].fields.push(fieldObj);
        return this;
    }
    
    /**
     * Remove a field from an embed
     *
     * @param {string} name The name of the field to remove
     */
    removeField(name) {
        this.data.embeds[0].fields = this.data.embeds[0].fields.filter(field => field.title != name);
        
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
            timestamp = new Date().toISOString();
        }

        this.data.embeds[0].timestamp = timestamp;
        return this;
    }

    /**
     * This method adds an image to the embed.
     *
     * @param {string} imageURL The URL to the image.
     */
    setImage(imageURL) {
        this.data.embeds[0].image = {
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
        this.data.embeds[0].thumbnail = {
            url: imageURL
        };
        return this;
    }

    /**
     * This method adds a footer to the Rich Embed.
     *
     * @param {string} text The text of the footer.
     * @param {string} icon The icon of the footer.
     */
    addFooter(text, icon) {
        this.data.embeds[0].footer = {
            text: text
        };
        if(icon) {
            this.data.embeds[0].footer.icon_url = icon;
        }
        return this;
    }

}

module.exports = MessageBuilder;
