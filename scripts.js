function showMentorshipOptions() {
    const mentorshipOptions = document.getElementById('mentorship-options');
    if (mentorshipOptions.classList.contains('hidden')) {
        mentorshipOptions.classList.remove('hidden');
    } else {
        mentorshipOptions.classList.add('hidden');
    }
}
