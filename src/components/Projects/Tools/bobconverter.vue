<template>
  <div :class="$style['container']">
    <h1>Linear RGB to sRGB Hex Converter</h1>
    <h2>(Useful for Beasts of Bermuda)</h2>
    <hr>
    <div :class="$style['description']">
      For a short explanation, Beasts of Bermuda uses sRGB HEX. However, a lot of 2D software (including websites) uses linear HEX and that's what you'll get when you find almost any palette off the Internet. In order to convert between the two, you'd have to do various math and while art programs and other places can do this for you, I was hard-pressed to find a simple colour conversion site to do this one simple thing. So! Here it is.
      <br/><br/>
      This thing does one job: It converts linear HEX to sRGB HEX.
      <br/><br/>
      NOTE: You may have to adjust alpha, saturation, and value sliders manually in order to get things <i>perfectly</i> the colour you want, because BoB does its own math after you give it the hexcode.
    </div>
    <hr>
    <form @submit.prevent="convertToSRGB">
      <div :class="$style['input']">
        <label for="linearHex">Linear RGB Hex:</label>
        <input type="text" v-model="linearHex" placeholder="#000000" required>
      </div>
      <p v-if="!isValidHex" :class="$style['error']">Invalid HEX color code.</p>
      <button type="submit">Convert</button>
    </form>
    <div id="result" v-if="srgbHex">
      <h2>sRGB Hex Result</h2>
      <div :class="$style['result-text']">
        <p id="srgbValue">
          {{ srgbHex }}
          <font-awesome-icon :icon="['far', 'clipboard']" @click="copyToClipboard" title="Copy to Clipboard" :class="$style['clipboard']"/>
        </p>
      </div>
      <p v-if="copied" :class="$style['copied-message']">Copied!</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        linearHex: '',
        srgbHex: '',
        isValidHex: true,
        copied: false
      }
    },
    methods: {
      validateHex(hex) {
        return /^#?([0-9A-F]{3}){1,2}$/i.test(hex)
      },
      convertToSRGB() {
        // Add # symbol if not included in the hexcode entered
        let hex = this.linearHex.startsWith('#') ? this.linearHex : `#${this.linearHex}`

        // If this isn't a valid hexcode, show the error message
        if (!this.validateHex(hex)) {
          this.isValidHex = false
          return
        }
        this.isValidHex = true

        // Convert hex to linear RGB values
        const rLinear = parseInt(hex.slice(1, 3), 16) / 255
        const gLinear = parseInt(hex.slice(3, 5), 16) / 255
        const bLinear = parseInt(hex.slice(5, 7), 16) / 255

        // Define the gamma correction function
        function gammaCorrection(c) {
          if (c <= 0.0031308) {
            return 12.92 * c
          } else {
            return 1.055 * Math.pow(c, 1 / 2.4) - 0.055
          }
        }

        // Apply gamma correction to each component
        const rSRGB = gammaCorrection(rLinear)
        const gSRGB = gammaCorrection(gLinear)
        const bSRGB = gammaCorrection(bLinear)

        // Convert to 0-255 scale and then to hex
        const rSRGBHex = Math.round(rSRGB * 255).toString(16).padStart(2, '0')
        const gSRGBHex = Math.round(gSRGB * 255).toString(16).padStart(2, '0')
        const bSRGBHex = Math.round(bSRGB * 255).toString(16).padStart(2, '0')

        // Combine to form the sRGB hex code
        this.srgbHex = `#${rSRGBHex}${gSRGBHex}${bSRGBHex}`.toUpperCase()
      },
      copyToClipboard() {
        // Create a textarea element
        const textarea = document.createElement('textarea')

        // Set its value to the text you want to copy
        textarea.value = this.srgbHex

        // Append the textarea to the document
        document.body.appendChild(textarea)

        // Select the text in the textarea
        textarea.select()

        // Execute the copy command
        document.execCommand('copy')

        // Remove the textarea from the document
        document.body.removeChild(textarea)

        // Display the "Copied!" message
        this.copied = true

        // Remove the 'Copied!' notice after a few seconds
        setTimeout(() => {
        this.copied = false
        }, 2000)
      }
    }
  }
</script>

<style module>
  .container {
    background-color: var(--primary-color);
    border: 2px inset var(--secondary-color);
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    text-align: center;
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
  }

  h1 {
    margin-bottom: 20px;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    margin-bottom: 5px;
    margin-top: 10px;
  }

  .input {
    display: flex;
    flex-direction: row;
    padding: 5px;
    margin-bottom: 10px;
    justify-content: center;
  }

  .input label, .input input {
    margin-left: 30px;
    margin-right: 30px;
  }

  #result {
    margin-top: 20px;
    text-decoration: underline;
  }

  .result-text {
    display: block ruby;
  }

  #srgbValue {
    font-weight: bold;
    margin-right: 10px;
  }

  .clipboard {
    cursor: pointer;
  }
</style>
