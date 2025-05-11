import { PageEnumList, PageEnumText } from "@/interfaces/pages";

export const getPage = (pageValue: string) => {
    if (pageValue) {
        switch (pageValue) {
            case PageEnumList.HOME:
                return PageEnumText.HOME;
            case PageEnumList.ABOUT_ME:
                return PageEnumText.ABOUT_ME;
            case PageEnumList.CONTACT:
                return PageEnumText.CONTACT;
            case PageEnumList.PROJECTS:
                return PageEnumText.PROJECTS;
            default:
                return '';
        }
    }
    return '';
}