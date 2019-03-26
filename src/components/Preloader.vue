<template>
    <div class="loader" :class="{'load-complete': markSpinner}">
        <div class="checkmark draw"></div>
    </div>
</template>

<script>
export default {
    name: 'Preloader',
    props: {
        completed: false
    },
    computed: {
        markSpinner() {
            return this.$props.completed
        }
    }
}
</script>

<style scoped>
.loader {
    position: relative;
    border: 6px solid #f3f3f3; /* Light grey */
    border-left-color: #0166af; /* Blue */
    border-right-color: #0166af;
    border-top-color: #0166af;
    border-radius: 50%;
    width: 7em;
    height: 7em;
    margin: 0 auto;
    animation: spin 1.4s linear infinite;
}

.load-complete {
  -webkit-animation: none;
  animation: none;
  border-color: #12AF23;
  border-width: 6px;
  transition: border 500ms ease-out;
}

.checkmark {
  display: none;
}

.load-complete .checkmark {
    display: block;
}

.checkmark.draw:after {
    animation-duration: 800ms;
    animation-timing-function: ease;
    animation-name: checkmark;
    transform: scaleX(-1) rotate(135deg);
}

.checkmark:after {
    opacity: 1;
    height: calc(7em / 2);
    width: calc(3.5em / 2);
    transform-origin: left top;
    border-right: 6px solid #12AF23;
    border-top: 6px solid #12AF23;
    content: '';
    left:  1.3em;
    top: 3.4em;
    position: absolute;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes checkmark {
  0% {
    height: 0;
    width: 0;
    opacity: 1;
  }
  20% {
    height: 0;
    width: calc(3.5em / 2);
    opacity: 1;
  }
  40% {
    height: calc(7em / 2);
    width: calc(3.5em / 2);
    opacity: 1;
  }
  100% {
    height: calc(7em / 2);
    width: calc(3.5em / 2);
    opacity: 1;
  }
}
</style>
