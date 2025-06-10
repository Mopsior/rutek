import { Opinions } from "./opinions"
import { H2 } from "./typo"

export const Testimonial = () => {
    return (
        <div className="website-margin mt-20" id="opinions">
            <H2 className="text-center">Co mówią o nas klienci</H2>
            <div className="mt-14 flex flex-row justify-around gap-10 lg:flex-nowrap flex-wrap">
                <Opinions name="Jan Kowalski" stars={3} priority={2}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et pretium quam. Mauris posuere tortor feugiat, mollis est vitae, gravida enim. Sed dapibus et dolor vel vehicula. In hac habitasse platea dictumst. Aenean sed ornare magna. Cras id elementum nibh. Etiam nec dolor erat.
                </Opinions>
                <Opinions name="p. Krzysztof" stars={5} priority={1}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et pretium quam. Mauris posuere tortor feugiat, mollis est vitae, gravida enim. Sed dapibus et dolor vel vehicula. In hac habitasse platea dictumst. Aenean sed ornare magna. Cras id elementum nibh. Etiam nec dolor erat.
                </Opinions>
                <Opinions name="Anna Lewandowska" stars={4} priority={3}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et pretium quam. Mauris posuere tortor feugiat, mollis est vitae, gravida enim. Sed dapibus et dolor vel vehicula. In hac habitasse platea dictumst. Aenean sed ornare magna. Cras id elementum nibh. Etiam nec dolor erat.
                </Opinions>
            </div>
        </div>
    )
}