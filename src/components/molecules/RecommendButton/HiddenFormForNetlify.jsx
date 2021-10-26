const HiddenFormForNetlify = () => {
  return (
    <form
      name="recommend"
      method="POST"
      data-netlify="recommend"
      hidden
      dangerouslySetInnerHTML={{ __html: '' }}
    >
      <input type="hidden" name="form-name" value="recommend" />
      <fieldset>
        <input type="text" name="your_name" required />
        <input type="email" name="your_email" required />
        <input type="tel" name="your_phone" />
      </fieldset>
      <fieldset>
        <input type="text" name="recommendee_name" required />
        <input type="email" name="recommendee_email" required />
        <input type="tel" name="recommendee_phone" />
        <textarea name="comment" />
      </fieldset>
    </form>
  );
};

export default HiddenFormForNetlify;
